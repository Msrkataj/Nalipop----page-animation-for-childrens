import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import storage from "../../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const HomeCarouselOpinions= ({close}) => {


    const data = [
        {
            name: 'Start',
            href: '#',
        },
        {
            name: 'O MNIE',
            href: 'me',
        },
        {
            name: 'OFERTA',
            href: 'offer',
        },
        {
            name: 'ATRAKCJE',
            href: 'attractions',
        },
        {
            name: 'KONTAKT',
            href: 'contact',
        },
    ];

    const [images, setImages] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, "opinions");

        listAll(storageRef)
            .then((res) => {
                const promises = res.items.map((itemRef) =>
                    getDownloadURL(itemRef).then((url) => ({
                        name: itemRef.name,
                        href: url,
                        description: itemRef.name,
                    }))
                );
                return Promise.all(promises);
            })
            .then((carouselItems) => setImages(carouselItems))
            .catch((error) => console.error("Error listing images:", error));
    }, []);



    return (
        <>
            <div className="page">
                    <h1 className="opinion-title">PRZEŻYJ NIESAMOWITE EMOCJE!</h1>
                    <div className="home_carousel-opinion">
                        <div className="grey-background"></div>
                        <div className="home-back home-back-opinions">
                                <img className="home-word-hands" src="/assets/bear.jpg" alt="Children-hands" />
                                <div className="home-back-overlay home-back-overlay-opinions">
                                    <div className="home_opinions_title">
                                        <h2>ZADOWOLENI KLIENCI</h2>
                                    </div>
                                    <div className="home_carousel-content home_carousel-content-opinions">
                                        <Carousel
                                            className="custom-carousel"
                                            showThumbs={false}
                                            showStatus={false}
                                            autoPlay
                                            interval={3000}
                                            infiniteLoop
                                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                                hasPrev && (
                                                    <button type="button" onClick={onClickHandler} title={label} className="carousel-prev">
                                                        <FontAwesomeIcon icon={faChevronLeft} />
                                                    </button>
                                                )
                                            }
                                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                                hasNext && (
                                                    <button type="button" onClick={onClickHandler} title={label} className="carousel-next">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </button>
                                                )
                                            }
                                        >
                                             {images.map((image, index) => (
                                                    <div key={index} className="carousel-item">
                                                        <img src={image.href} alt={image.name} />
                                                    </div>
                                                ))}
                                                </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="home-blonde">
                        <img className="home-blonde-jpg" src="/assets/blonde.png" alt="Children-hands" />
                        <div className="home-blonde-jpg-overlay">
                            <div className="home-blonde-jpg-overlay-title">
                                <h2>ZAPEWNIMY TWOJEMU DZIECKU<br/>ANIMACYJNĄ DAWKĘ SZCZĘŚCIA!</h2>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default HomeCarouselOpinions