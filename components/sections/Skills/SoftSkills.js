export default function SoftSkills() {
    return (
        <div className="rounded-lg bg-softSkills shadow-2xl shadow-black/30 dark:shadow-none">
            <div className="grid w-full grid-cols-3 items-start justify-items-center gap-x-4 bg-white/30 px-4 py-8 dark:bg-black/50">
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-150 dark:bg-black/40"
                    dir="rtl"
                >
                    <h6 className="text-2xl font-thin text-orange-500">درباره من</h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>دارای کاردانی طراحی صفحات وب</li>
                        <li>مسلط به زبان انگلیسی</li>
                        <li>وضعیت تاهل مجرد</li>
                        <li>متولد ۰۶ / ۱۳۹۹</li>
                        <li>ساکن تهران</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-200 dark:bg-black/40"
                    dir="rtl"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        مهارت‌های محیط‌کاری
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>وقت شناس و مدیریت تایم</li>
                        <li>اشتیاق به مشارکت در پروژه</li>
                        <li>منعطف و تطبیق‌پذیر در امور</li>
                        <li>تحقیق و بررسی در امور</li>
                        <li>حل مسائل و چالش‌ها</li>
                        <li>شوخ‌طبع و مثبت‌نگر</li>
                        <li>روابط اجتماعی موثر</li>
                        <li>عیب یابی (دیباگینگ)</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md dark:bg-black/40"
                    dir="rtl"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        مهارت‌های کارگروهی
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>مسئولیت‌پذیر</li>
                        <li>انتقادگرا و انتقادپذیر</li>
                        <li>مهارت در برقراری ارتباط</li>
                        <li>منطبق با کار تیمی</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
