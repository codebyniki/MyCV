import { useState, useEffect } from 'react';

export const useScrollPosition = (threshold: number = 0): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Check initial scroll position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isScrolled;
};