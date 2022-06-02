//? components
import Hobby from "./Hobbies/Hobby";

//? comp
export default function Hobbies() {
    return (
        <section
            className="
            lg:justify-around mt-8 flex w-full max-w-5xl flex-col items-center justify-center gap-y-4 
            gap-x-4 border-y border-dashed border-zinc-500 py-8 dark:border-white/20 lg:flex-row"
        >
            <Hobby
                title={"۱۰۲۴"}
                icon={"/Coffee.png"}
                subtitle={"تعداد قهوه‌های نوشیده شده"}
            />
            <Hobby
                title={"۱۲۸"}
                icon={"/Bug.png"}
                subtitle={"تعداد باگهای رفع شده"}
            />
            <Hobby
                title={"خیلی*"}
                icon={"/Smile.png"}
                subtitle={"تعداد لبخندهای روزانه"}
            />
        </section>
    );
}
