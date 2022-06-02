//? components
import PortfolioSlider from "./Portfolio/PortfolioSlider";

//? comp
export default function PortfolioSection() {
    return (
        <section
            className="
            flex w-full max-w-md flex-col items-center justify-center border-b border-dashed 
            border-zinc-600 bg-zinc-100/50 py-4 dark:bg-grey-500/50 lg:max-w-5xl"
            id="portfolioSection"
        >
            <h6 className="text-6xl font-thin tracking-wide text-orange-500/10 lg:right-0 lg:translate-x-0 lg:self-start lg:text-8xl">
                نمونه‌کارها
            </h6>
            <div className="portfolio -mt-5 w-full lg:-mt-10">
                <PortfolioSlider />
            </div>
        </section>
    );
}
