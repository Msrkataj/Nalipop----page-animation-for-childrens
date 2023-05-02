import { useState, useEffect } from 'react';
import { isInViewport } from '../../utils/isInViewport';


export const useScrollAnimation = (elementSelector) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '0px',
            threshold: 0.1,
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
