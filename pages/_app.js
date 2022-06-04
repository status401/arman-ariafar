//? required
import "../styles/globals.css";
import "../styles/Font.css";
import { ThemeProvider } from "next-themes";

//? components
import Navigation from "../components/sections/Navigation";
import Footer from "../components/sections/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem attribute="class">
            <ScrollProgress />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}
