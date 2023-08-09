import { useState, useEffect } from 'react';


export const useScrollAnimation = (elementSelector) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                else if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    setIsVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: [0, 1]
        });

        const element = document.querySelector(elementSelector);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementSelector]);

    return isVisible;
};
