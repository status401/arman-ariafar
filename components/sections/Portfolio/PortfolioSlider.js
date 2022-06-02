// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//? components
import Sefid from "./Sefid";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function PortfolioSlider() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-theme-color": "#FF870F",
                }}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                speed={2000}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide>
                    <Sefid />
                </SwiperSlide>
                <SwiperSlide>
                    <Sefid />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
