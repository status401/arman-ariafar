export default function Coding() {
    return (
        <div className="rounded-lg bg-coding shadow-2xl shadow-black/20 dark:shadow-none">
            <div className="grid w-full grid-cols-3 items-start justify-items-center gap-x-4 bg-white/30 px-4 py-8 dark:bg-black/50">
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-150 dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        My Favorite Ones 🧡
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>Next.js</li>
                        <li>JavaScript ES6</li>
                        <li>TailwindCss</li>
                        <li>Framer Motion</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-200 dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        Other Techs ☕
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>React.js</li>
                        <li>Axios</li>
                        <li>Sass/Less</li>
                        <li>Bootstrap/AntD/MaterialUI/ChakraUI</li>
                        <li>Styled-Components</li>
                        <li>Swiper.js</li>
                        <li>React-Select</li>
                        <li>JavaScript</li>
                        <li>Git | GitHub | GitLab</li>
                        <li>Redux</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        Coming Soon... 🧑🏻‍💻
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>WordPress</li>
                        <li>NodeJs</li>
                        <li>React-Native</li>
                        <li>etc, (never gonna stop)</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
