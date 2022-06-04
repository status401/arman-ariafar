//? required
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

//? components
import MenuButton from "../ui/Menu";

//? icons
import SunIcon from "@heroicons/react/solid/SunIcon";
import MoonIcon from "@heroicons/react/solid/MoonIcon";

//? comp
export default function Navigation() {
    const [isActive, setIsActive] = useState(false);
    const variable = {
        hidden: {
            y: -20,
            opacity: 0,
            display: "none",
        },
        animate: {
            display: isActive ? "flex" : "none",
            y: isActive ? 0 : -20,
            opacity: isActive ? 1 : 0,
            transition: {
                type: "tween",
                duration: 0.7,
                display: {
                    delay: isActive ? 0 : 1,
                },
            },
        },
    };
    const [screenWidth, setScreenWidth] = useState(0);
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
        setMounted(true);
    }, []);
    function renderThemeChanger() {
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return (
                <SunIcon
                    className="h-10 w-10 justify-self-start text-orange-500"
                    role="button"
                    onClick={() => setTheme("light")}
                />
            );
        } else {
            return (
                <MoonIcon
                    className="h-10 w-10 justify-self-start text-orange-500"
                    role="button"
                    onClick={() => setTheme("dark")}
                />
            );
        }
    }

    if (screenWidth < 1024) {
        return (
            <>
                <nav
                    className="
                    fixed top-0 right-0 z-[100] grid w-full grid-cols-2 items-center justify-items-start
                    bg-white/5 py-4 px-4 backdrop-blur-lg backdrop-saturate-200 dark:bg-grey-500/5 lg:hidden"
                >
                    <MenuButton setIsActive={setIsActive} isActive={isActive} />
                    <a
                        href="#homeSection"
                        className="relative top-[2px] justify-self-end text-2xl font-thin text-orange-500"
                        dir="ltr"
                    >
                        A<span className="text-lg">A</span>.
                    </a>
                </nav>
                {isActive && (
                    <div
                        className="fixed top-0 left-0 z-[98] h-screen w-screen"
                        onClick={() => setIsActive(false)}
                        onTouchMove={() => setIsActive(false)}
                    />
                )}

                <motion.div
                    variants={variable}
                    initial="hidden"
                    animate="animate"
                    className="
                        fixed top-12 left-0 right-0 z-[99]  w-full items-center justify-center bg-white/5 py-10 backdrop-blur-lg 
                        backdrop-saturate-200 dark:bg-grey-500/5"
                >
                    <div className="flex flex-col items-start justify-center leading-10 dark:text-grey-300">
                        <a href="#homeSection" onClick={() => setIsActive(false)}>
                            خانه
                        </a>
                        <a href="#skillsSection" onClick={() => setIsActive(false)}>
                            مهارت‌ها
                        </a>
                        <a
                            href="#portfolioSection"
                            onClick={() => setIsActive(false)}
                        >
                            نمونه‌کارها
                        </a>
                        <a
                            href="#contactMeSection"
                            onClick={() => setIsActive(false)}
                        >
                            تماس با من
                        </a>
                        <span className="absolute bottom-2 left-2">
                            {renderThemeChanger()}
                        </span>
                    </div>
                </motion.div>
            </>
        );
    } else {
        return (
            <nav
                className="
                    dark:bg-grey fixed top-0 right-1/2 z-[100] grid w-full max-w-5xl translate-x-1/2 grid-cols-[1fr_2.5fr_1fr] items-center
                    justify-items-center rounded-b-lg border-b border-b-black/20 bg-white/5 p-4 backdrop-blur-lg backdrop-saturate-200 dark:bg-black/5"
            >
                {renderThemeChanger()}
                <ul className="grid grid-cols-3 items-center justify-items-center gap-x-10 text-sm font-bold text-zinc-500 dark:text-lightGrey">
                    <li>
                        <a
                            href="#skillsSection"
                            className="duration-200 hover:text-orange-500"
                        >
                            مهارت‌ها
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolioSection"
                            className="duration-200 hover:text-orange-500"
                        >
                            نمونه کارها
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contactMeSection"
                            className="duration-200 hover:text-orange-500"
                        >
                            تماس با من
                        </a>
                    </li>
                </ul>
                <a
                    className="relative top-[2px] justify-self-end text-2xl font-thin text-orange-500"
                    dir="ltr"
                    href="#homeSection"
                >
                    A<span className="text-lg">A</span>.
                </a>
            </nav>
        );
    }
}
