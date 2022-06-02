//? required
import "../styles/globals.css";
import "../styles/Font.css";
import { ThemeProvider } from "next-themes";

//? components
import Navigation from "../components/sections/Navigation";
import Footer from "../components/sections/Footer";


export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem attribute="class">
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}
