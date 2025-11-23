import { useEffect, useState } from "react"

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        //Add smooth scolling to html element
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            //Cleanup smooth scroll on unmount
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

  return showScrollTop;
};
