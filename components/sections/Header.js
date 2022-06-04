//? required
import { motion } from "framer-motion";

//? components
import Binary from "../ui/Binary";
import Instagram from "../ui/Instagram";

//? icons
import AcademicCapIcon from "@heroicons/react/solid/AcademicCapIcon";
import HashtagIcon from "@heroicons/react/outline/HashtagIcon";
import ArrowSmDownIcon from "@heroicons/react/solid/ArrowSmDownIcon";

//? framer
const ImageVars = {
    hidden: {
        y: -50,
    },
    visible: {
        y: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 1.2,
        },
    },
};
const ContentVars = {
    hidden: { y: -50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.2,
            ease: "easeOut",
            opacity: { duration: 1.2 },
            delay: 1,
        },
    },
};

//? comp
export default function Header() {
    return (
        <header
            id="homeSection"
            className="
                m-auto flex min-h-screen w-full max-w-md flex-col items-center justify-start 
                gap-y-20 bg-white px-4 pt-20 duration-200 dark:bg-grey-600 lg:grid lg:max-w-5xl
                lg:grid-cols-2 lg:grid-rows-[90%_10%] lg:justify-items-center lg:gap-0 lg:pt-0"
        >
            <motion.div
                variants={ImageVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-80 w-[90%] max-w-xs"
            >
                <Binary />
                <div className="fancyBorder absolute top-0 z-10 aspect-square w-full bg-white shadow-2xl shadow-black/20 dark:bg-grey-500"></div>
                <div className="absolute left-1 -bottom-5 z-20 aspect-square rounded-2xl bg-white p-1.5 shadow-2xl shadow-[#d846efda] dark:bg-grey-500">
                    <a href="https://instagram.com/rubahe.ig">
                        <Instagram />
                    </a>
                </div>
            </motion.div>
            <motion.div
                variants={ContentVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex w-full flex-col items-center justify-center"
            >
                <div className="relative">
                    <div className="ballBg absolute -right-8 -top-8 aspect-square w-[4.5rem] rounded-full dark:opacity-50" />
                    <h1 className="text-4xl font-thin text-orange-500">
                        <span className="text-zinc-500 dark:text-lightGrey">من</span>{" "}
                        آرمان آریافرم
                    </h1>
                </div>
                <p className="mt-2 text-sm font-normal text-orange-500">
                    <span className="text-zinc-500 dark:text-lightGrey">
                        طراح و توسعه دهنده Front-End،
                    </span>{" "}
                    ساکن در تهران
                </p>
                <div className="mt-6 flex w-full flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-8 lg:px-10">
                    <a
                        href="#skillsSection"
                        className="
                            flex w-2/3 items-center justify-center gap-x-1 rounded-lg py-2.5 text-center text-base 
                            font-extrabold text-orange-500 duration-200 hover:bg-orange-500/10 dark:text-orange-500/80 lg:order-2"
                    >
                        <AcademicCapIcon style={{ width: "1.5rem" }} />
                        مشاهده مهارت‌ها
                    </a>
                    <a
                        href="#portfolioSection"
                        className="
                            flex w-2/3 items-center justify-center rounded-lg bg-primaryBtn py-3 text-center
                            font-extrabold text-white shadow-xl shadow-orange-600/50 duration-200 hover:shadow-none dark:border-2
                            dark:border-orange-600 dark:bg-none dark:text-orange-500 dark:shadow-none dark:hover:bg-orange-600/10"
                    >
                        <HashtagIcon style={{ width: "1.2rem" }} />
                        مشاهده نمونه‌کارها
                    </a>
                </div>
            </motion.div>
            <div className="col-span-2 hidden lg:inline-block">
                <a
                    href="#skillsSection"
                    className="flex flex-col items-center justify-center tracking-wide text-zinc-500 dark:text-lightGrey/20"
                >
                    شناخت بیشتر
                    <ArrowSmDownIcon
                        style={{ width: "1.5rem" }}
                        className="goDownArrow opacity-80"
                    />
                </a>
            </div>
        </header>
    );
}
