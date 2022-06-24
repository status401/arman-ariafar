//? icons
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import InformationCircleIcon from "@heroicons/react/solid/InformationCircleIcon";

//? comp
export default function Sefid() {
    return (
        <article
            className="
                mx-5 grid w-full grid-rows-2 items-center justify-items-center overflow-hidden rounded-lg border
                border-orange-500 bg-white shadow-xl shadow-black/10 duration-500 dark:bg-grey-500 lg:w-3/4 lg:grid-cols-2 lg:grid-rows-1"
        >
            <img
                src="/Sefid.jpg"
                alt="Sefid"
                className="aspect-square w-full dark:opacity-90"
            />
            <div className="relative mt-6 flex h-full w-full flex-col items-start justify-start gap-y-2 self-start px-4">
                <h5 className="self-center text-xl font-thin text-orange-500">
                    آقای سیبیل{" "}
                    <span className="text-sm font-bold">
                        (فروش آنلاین قهوه سرو شده)
                    </span>
                </h5>
                <h6 className="mt-2 text-base font-extrabold text-zinc-500 dark:text-lightGrey">
                    تکنولوژی‌های استفاده شده:
                </h6>
                <ul className="flex list-disc flex-col items-start justify-center pr-4 text-base leading-8 text-zinc-500 dark:text-lightGrey/50">
                    <li>Next.js</li>
                    <li>TailwindCss</li>
                    <li>Formik x Yup</li>
                    <li>Framer-Motion</li>
                    <li>React-Context/Reducer</li>
                    <li>React-Hot-Toast</li>
                </ul>
                <a
                    href="https://gtmetrix.com/reports/mr-mustache-cafe.vercel.app/5iuEarQo/"
                    className="absolute -top-4 left-1 flex items-center justify-center text-xs text-orange-500"
                >
                    GTMetrix
                    <InformationCircleIcon
                        style={{ width: "1.2rem", transform: "translateY(-1px)" }}
                    />
                </a>
                <div className="absolute bottom-10 right-0 left-0 grid w-full grid-cols-2 items-center justify-items-center gap-y-2 justify-self-end">
                    <a
                        href="https://mr-mustache-cafe.vercel.app/"
                        className="flex w-full items-center justify-center gap-x-1 text-sm font-medium text-orange-500"
                    >
                        <ExternalLinkIcon
                            style={{
                                width: "1.1rem",
                                transform: "translateY(-2px)",
                            }}
                        />
                        مشاهده آنلاین پروژه
                    </a>
                    <a
                        href="https://github.com/status401/mr-mustache-cafe"
                        className="flex w-full items-center justify-center gap-x-1 text-sm font-medium text-orange-500"
                    >
                        <ExternalLinkIcon
                            style={{
                                width: "1.1rem",
                                transform: "translateY(-2px)",
                            }}
                        />
                        گیت‌هاب پروژه
                    </a>
                </div>
            </div>
        </article>
    );
}
