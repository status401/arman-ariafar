//? required
import { useState, useEffect } from "react";

//? components
import Coding from "./Skills/Coding";
import Design from "./Skills/Design";
import SoftSkills from "./Skills/SoftSkills";
import CodingMobile from "./Skills/CodingMobile";
import DesignMobile from "./Skills/DesignMobile";
import SoftSkillsMobile from "./Skills/SoftSkillsMobile";

//? comp
export default function SkillsSection() {
    // for responsive with js
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const width = window.screen.width;
        setScreenWidth(width);
    }, []);

    // for mounting skills components
    const [isActive, setIsActive] = useState(2);
    return (
        <section
            className="w-full max-w-5xl border-t border-orange-500"
            id="skillsSection"
        >
            <header className="relative m-auto grid h-28 max-w-md grid-cols-3 items-center justify-items-center lg:max-w-5xl">
                <h6
                    className="
                    absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-7xl font-thin 
                    tracking-wide text-orange-500/10 lg:right-0 lg:translate-x-0 lg:text-8xl"
                >
                    مهارت‌ها
                </h6>
                <button
                    className={` ${
                        isActive === 1 &&
                        "text-lg !font-thin !text-orange-500 underline underline-offset-8"
                    } z-50 text-base font-extrabold text-zinc-500 dark:text-lightGrey 
                        `}
                    onClick={() => setIsActive(1)}
                >
                    طراحی
                </button>
                <button
                    className={` ${
                        isActive === 2 &&
                        "text-lg !font-thin !text-orange-500 underline underline-offset-8"
                    } z-50 text-base font-extrabold text-zinc-500 dark:text-lightGrey
                        `}
                    onClick={() => setIsActive(2)}
                >
                    کدینگ
                </button>
                <button
                    className={` ${
                        isActive === 3 &&
                        "text-lg !font-thin !text-orange-500 underline underline-offset-8"
                    } z-50 text-base font-extrabold text-zinc-500 dark:text-lightGrey
                        `}
                    onClick={() => setIsActive(3)}
                >
                    محیط کاری
                </button>
            </header>
            {screenWidth > 1024 && (
                <section className="hidden w-full lg:inline">
                    {isActive === 1 && <Design />}
                    {isActive === 2 && <Coding />}
                    {isActive === 3 && <SoftSkills />}
                </section>
            )}
            {screenWidth < 1021 && (
                <section className="inline w-full lg:hidden">
                    {isActive === 1 && <DesignMobile />}
                    {isActive === 2 && <CodingMobile />}
                    {isActive === 3 && <SoftSkillsMobile />}
                </section>
            )}
        </section>
    );
}
