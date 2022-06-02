//? required
import Head from "next/head";

//? components
import Header from "../components/sections/Header";
import SkillsSection from "../components/sections/SkillsSection";
import Hobbies from "../components/sections/Hobbies";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactMeSection from "../components/sections/ContactMe";

//? comp
export default function HomePage() {
    return (
        <>
            <Head>
                <title>آرمان آریافر || طراح و توسعه دهنده Front-End</title>
            </Head>
            <Header />
            <main className="flex flex-col items-center justify-center">
                <SkillsSection />
                <Hobbies />
                <PortfolioSection />
                <ContactMeSection />
            </main>
        </>
    );
}
