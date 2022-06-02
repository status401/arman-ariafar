// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

export default function CodingMobile() {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#FF870F",
                "--swiper-navigation-size": "30px",
            }}
            speed={1500}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="max-w-md"
        >
            <div
                slot="container-start"
                className="parallax-bg bg-coding dark:opacity-50"
                data-swiper-parallax="-50%"
            ></div>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/80 px-4 py-7 dark:bg-black/80"
                    dir="ltr"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        My Favorite Ones 🧡
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>Next.js</li>
                            <li>JavaScript ES6</li>
                            <li>TailwindCss</li>
                            <li>Framer Motion</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/80 px-4 py-7 dark:bg-black/80"
                    dir="ltr"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        Other Techs ☕
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
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
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/80 px-4 py-7 dark:bg-black/80"
                    dir="ltr"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        Coming Soon... 🧑🏻‍💻
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>WordPress</li>
                            <li>NodeJs</li>
                            <li>React-Native</li>
                            <li>etc, (never gonna stop)</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
        </Swiper>
    );
}
