import { useEffect, useState } from 'react'

export const userIntersectionObserver = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hasAnimated, setHasAnimated] = useState({});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    //Only animate if it hasn't been animated before
                    if(entry.isIntersecting && !hasAnimated[entry.target.id]){
                        setHasAnimated(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('[id]').forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]); 

  return hasAnimated;
};
