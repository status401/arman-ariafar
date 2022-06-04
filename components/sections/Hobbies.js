//? required
import { motion } from "framer-motion";

//? components
import Hobby from "./Hobbies/Hobby";

//? framer
const ChildVar = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

const childData = [
    { title: "۱۰۲۴", icon: "/Coffee.png", subtitle: "تعداد قهوه‌های نوشیده شده" },
    { title: "۱۲۸", icon: "/Bug.png", subtitle: "تعداد باگهای رفع شده" },
    { title: "خیلی*", icon: "/Smile.png", subtitle: "تعداد لبخندهای روزانه" },
];

//? comp
export default function Hobbies() {
    return (
        <section
            className="
            mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-y-4 gap-x-4 overflow-hidden
            border-y border-dashed border-zinc-500 py-8 dark:border-white/20 lg:flex-row lg:justify-around"
        >
            {childData.map((hobby, key) => {
                return (
                    <motion.article
                        key={key}
                        className="w-full"
                        variants={ChildVar}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{
                            delay: key * 0.6,
                            type: "tween",
                            duration: 0.8,
                        }}
                    >
                        <Hobby
                            title={hobby.title}
                            icon={hobby.icon}
                            subtitle={hobby.subtitle}
                        />
                    </motion.article>
                );
            })}
        </section>
    );
}
