//? icons
import WhatsApp from "../ui/WhatsApp";
import IG from "../ui/IG";
import Email from "../ui/Email";

//? comp
export default function ContactMeSection() {
    return (
        <section
            className="
            flex w-full max-w-md flex-col items-center justify-center px-4 lg:relative lg:mt-10
            lg:grid lg:max-w-5xl lg:grid-cols-2 lg:items-center lg:justify-items-center lg:px-0"
            id="contactMeSection"
        >
            <header className="relative m-auto h-28 w-full max-w-md lg:absolute lg:top-0 lg:right-0 lg:max-w-5xl">
                <h6
                    className="
                    absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-7xl font-thin 
                    tracking-wide text-orange-500/10 lg:right-0 lg:translate-x-0 lg:text-8xl"
                >
                    تماس‌با‌من
                </h6>
            </header>
            <div className="z-50 -mt-10 aspect-square w-full max-w-xs rounded-2xl bg-white shadow-2xl dark:bg-grey-500 lg:order-2 lg:mt-0 lg:justify-self-end" />
            <div className="mt-10 flex flex-col items-start justify-center">
                <h6 className="text-base font-extrabold text-zinc-500 dark:text-grey-400">
                    ارتباط با
                </h6>
                <h5 className="mt-2 text-5xl font-thin text-orange-500">
                    آرمان آریافر
                </h5>
                <p className="mt-6 text-xs font-extrabold text-zinc-500/50 dark:text-grey-400">
                    من کسیم که حتی شب بیدار میمونه تا صبح پروژه رو تحویل بده {":)"}
                </p>
                <ul className="mt-8 flex flex-col items-start justify-center font-extrabold text-zinc-500 dark:text-grey-400">
                    <li>
                        <a
                            href="https://google.com"
                            className="flex items-center justify-center gap-x-1 lg:gap-x-2"
                        >
                            <Email />
                            Status4x1@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://google.com"
                            dir="ltr"
                            className="flex items-center justify-center gap-x-1 lg:gap-x-2"
                        >
                            ۰۹۳۰ ۱۲۲۰ ۵۱۰
                            <WhatsApp />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://google.com"
                            className="flex items-center justify-center gap-x-1 lg:gap-x-2"
                        >
                            <IG />
                            Rubahe.ig
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
