import React, { useState, useEffect } from 'react';

const OfferMap = () => {
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    const handleImageClick = () => {
        const image = document.querySelector('.zoomed');
        if (isImageZoomed) {
            image.style.transform = '';
        }
        setIsImageZoomed(!isImageZoomed);
    };

    useEffect(() => {
        if (isImageZoomed) {
            const image = document.querySelector('.zoomed');

            const imgWidth = image.clientWidth;
            const containerWidth = window.innerWidth;
            const initialTransform = `translateX(${-(imgWidth - containerWidth) / 2}px)`;
            image.style.transform = (imgWidth > containerWidth) ? initialTransform : '';

            import('hammerjs').then(({default: Hammer}) => {
                const hammer = new Hammer(image);
                hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

                let totalDeltaX = -(imgWidth - containerWidth) / 2;

                hammer.on('pan', (e) => {
                    const prevTotalDeltaX = totalDeltaX;
                    totalDeltaX += e.deltaX / 50

                    const maxDeltaX = imgWidth - containerWidth;

                    if (imgWidth > containerWidth) {
                        if (Math.abs(totalDeltaX) <= maxDeltaX && totalDeltaX <= 0) {
                            image.style.transform = `translateX(${totalDeltaX}px)`;
                        } else {
                            if(Math.abs(totalDeltaX) > maxDeltaX) {
                                totalDeltaX = -maxDeltaX;
                            } else if (totalDeltaX > 0) {
                                totalDeltaX = 0;
                            }
                            image.style.transform = `translateX(${totalDeltaX}px)`;
                        }
                    }


                    hammer.on('panend', () => {
                        image.style.transform = image.style.transform;
                    });
                });

                return () => {
                    hammer.destroy();
                };
            });
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
                        src="/assets/map.webp"
                        alt="map"
                        onClick={handleImageClick}
                    />
                </section>
            </div>
        </>
    );
};

export default OfferMap;