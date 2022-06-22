// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

export default function SoftSkillsMobile() {
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
                className="parallax-bg bg-softSkills dark:opacity-50"
                data-swiper-parallax="-50%"
            ></div>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/90 px-4 py-7 dark:bg-black/80"
                    dir="rtl"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        درباره من
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>دارای کاردانی طراحی صفحات وب</li>
                            <li>مسلط به زبان انگلیسی</li>
                            <li>وضعیت تاهل مجرد</li>
                            <li>متولد ۰۶ / ۱۳۹۹</li>
                            <li>ساکن تهران</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/90 px-4 py-7 dark:bg-black/80"
                    dir="rtl"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        مهارت‌های محیط‌کاری
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>وقت شناس و مدیریت زمان</li>
                            <li>منعطف و تطبیق‌پذیر</li>
                            <li>روابط اجتماعی موثر</li>
                            <li>اشتیاق به مشارکت</li>
                            <li>تحقیق و بررسی</li>
                            <li>طرز فکر درختی</li>
                            <li>حل مسئله</li>
                            <li>عیب یابی</li>
                            <li>شوخ‌طبع</li>
                            <li>مثبت‌گرا</li>
                            <li>جزئی‌گرا</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article
                    className="w-full overflow-hidden rounded-xl bg-white/90 px-4 py-7 dark:bg-black/80"
                    dir="rtl"
                >
                    <h6
                        data-swiper-parallax="-300"
                        className="text-2xl font-thin text-orange-500"
                    >
                        مهارت‌های کاره‌گروهی
                    </h6>
                    <div className="text" data-swiper-parallax="-100">
                        <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                            <li>انتقادگرا و انتقادپذیر</li>
                            <li>مهارت برقراری ارتباط</li>
                            <li>منطبق با کار تیمی</li>
                            <li>مسئولیت‌پذیر</li>
                        </ul>
                    </div>
                </article>
            </SwiperSlide>
        </Swiper>
    );
}
