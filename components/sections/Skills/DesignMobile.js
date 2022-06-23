// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

export default function DesignMobile() {
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
                disableOnInteraction: true,
            }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="max-w-md"
        >
            <div
                slot="container-start"
                className="parallax-bg bg-design dark:opacity-50"
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
                        Softwares 🗃️
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>Figma</li>
                            <li>A.XD</li>
                            <li>A.Illustrator</li>
                            <li>A.Photoshop</li>
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
                        Design Skills 🎨
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>Spacing</li>
                            <li>Typography</li>
                            <li>Selecting fonts</li>
                            <li>Color Theory</li>
                            <li>Color Sense</li>
                            <li>Composition / Layout</li>
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
                        Coming Soon... 📸
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>A.Premiere</li>
                            <li>A.AfterEffects</li>
                            <li>Photography</li>
                            <li>etc, (never gonna stop)</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
        </Swiper>
    );
}
