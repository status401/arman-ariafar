//? comp
export default function Hobby({ icon, title, subtitle }) {
    return (
        <article
            className="
            grid h-20 w-full max-w-[300px] grid-cols-[25%_75%] grid-rows-2 items-center justify-items-start 
            gap-x-2 rounded-lg bg-white py-2 px-2 shadow-xl shadow-black/10 dark:bg-grey-500"
        >
            <img
                src={icon}
                alt={title}
                className="row-span-2 w-16 justify-self-center"
            />
            <h6 className="text-lg font-thin text-orange-500">{title}</h6>
            <p className="text-sm font-bold text-zinc-500 dark:text-lightGrey">{subtitle}</p>
        </article>
    );
}
