import React, {useState, useEffect} from "react";
const ContactMap = () => {
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    const handleImageClick = () => {
        const image = document.querySelector('.zoomed');
        if (isImageZoomed) {
            // Reset image transform when closing zoom
            image.style.transform = '';
        }
        setIsImageZoomed(!isImageZoomed);
    };


    // ...
    // ...
    useEffect(() => {
        if (isImageZoomed) {
            const image = document.querySelector('.zoomed');
            const Hammer = require('hammerjs');
            const hammer = new Hammer(image);

            hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

            let initialTransform = image.style.transform;
            let totalDeltaX = 0;

            hammer.on('pan', (e) => {
                const prevTotalDeltaX = totalDeltaX;
                totalDeltaX += e.deltaX /5;

                const imgWidth = image.clientWidth;
                const containerWidth = window.innerWidth;
                const maxDeltaX = imgWidth - containerWidth;

                if (imgWidth > containerWidth) {
                    if (Math.abs(totalDeltaX) <= maxDeltaX && totalDeltaX <= 0) {
                        initialTransform = `translateX(${totalDeltaX}px)`;
                        image.style.transform = initialTransform;
                    } else {
                        totalDeltaX = prevTotalDeltaX;
                    }
                }

                hammer.on('panend', () => {
                    initialTransform = image.style.transform;
                });
            });

            return () => {
                hammer.destroy();
            };
        }
    }, [isImageZoomed]);

    return (
        <>
            <div className="container">
                <section className="offer_map">
                    <h1>GDZIE NAS ZNAJDZIESZ?</h1>
                    <p className={`${isImageZoomed ? "close" : ""}`} onClick={handleImageClick}>
                        KLIKNIJ, ŻEBY POWIĘKSZYĆ
                    </p>
                    {isImageZoomed && (
                        <>
                            <div className="zoomed-bg" onClick={handleImageClick}></div>
                            <div className="close-icon" onClick={handleImageClick}>&times;</div>
                        </>
                    )}
                    <img
                        className={`offer_map-section-photo ${ isImageZoomed ? "zoomed" : ""}`}
                        src="/assets/map.png"
                        alt="map"
                        onClick={handleImageClick}
                    />
                </section>
            </div>
        </>
    );
};

export default ContactMap;