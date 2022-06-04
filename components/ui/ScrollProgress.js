//? required
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const width = window.screen.width;
        setScreenWidth(width);
    }, []);
    const { scrollYProgress } = useViewportScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 500, damping: 90 });

    return (
        <motion.div className="fixed right-1/2 top-0 z-[200] w-full translate-x-1/2">
            <svg
                className="progress-icon"
                viewBox={`0 0 370 ${screenWidth >= 1024 ? "1.5" : "5"}`}
            >
                <motion.path
                    stroke="#FF870F"
                    strokeWidth="8"
                    strokeDasharray="0 1"
                    fill="none"
                    d="M0 0.5H370"
                    style={{
                        pathLength,
                        opacity: 1,
                    }}
                />
            </svg>
        </motion.div>
    );
}