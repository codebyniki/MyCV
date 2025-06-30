import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            } bg-gradient-to-r from-[#0077ff] to-[#3827ff] text-white p-3 rounded-full shadow-lg hover:opacity-90`}
        >
            <ArrowUpIcon className="w-5 h-5" />
        </button>
    );
};
