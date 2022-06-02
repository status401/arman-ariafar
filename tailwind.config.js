module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    darkMode: "class",
    theme: {
        colors: {
            orange: {
                500: "#FF870F",
                600: "#f55555",
            },
            zinc: {
                100: "#cad7eb",
                500: "#6C7A8E",
                600: "#6C7A8E",
            },
            white: "#ffffff",
            black: "#000000",
            grey: {
                300: "#EEEEEE",
                400: "#A1A1A1",
                500: "#1F1F1F",
                600: "#121212",
            },
            lightGrey: "#C4C4C4",

        },
        fontFamily: {
            sans: "IRANYekan",
        },
        backgroundImage: {
            coding: "url(/Coding.webp)",
            design: "url(/Design.webp)",
            softSkills: "url(/SoftSkills.webp)",
            primaryBtn: "linear-gradient(135deg, #ff870f 10%, #f55555)",
            none: "none"
        },
        extend: {},
    },
    plugins: [],
};
