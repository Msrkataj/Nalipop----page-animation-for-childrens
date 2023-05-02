import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import storage from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const OfferCarouselAttractions = ({close}) => {
    const [balloonsImageUrl, setBalloonsImageUrl] = useState(null);
    const [piniataImageUrl, setPiniataImageUrl] = useState(null);
    const [womenImageUrl, setWomenImageUrl] = useState(null);
    const isVisible = useScrollAnimation('.home_carousel');

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



    useEffect(() => {
        const storageRefBalloons = ref(storage, "atractions/balon.png");
        const storageRefPiniata = ref(storage, "atractions/piniata.png");
        const storageRefWomen = ref(storage, "atractions/women-paint.png");
        getDownloadURL(storageRefBalloons)
            .then((url) => setBalloonsImageUrl(url))
            .catch((error) => console.error("Error getting balloons image URL:", error));

        getDownloadURL(storageRefPiniata)
            .then((url) => setPiniataImageUrl(url))
            .catch((error) => console.error("Error getting piniata image URL:", error));

        getDownloadURL(storageRefWomen)
            .then((url) => setWomenImageUrl(url))
            .catch((error) => console.error("Error getting women image URL:", error));
    }, []);


    const carousel = [
        {
            name: 'balloons',
            href: balloonsImageUrl, // Użyj URL pobranego z Firebase Storage
            description: "Modelowanie balonów"
        },
        {
            name: 'piniata',
            href: piniataImageUrl,
            description: "Piniaty!"

        },
        {
            name: 'women',
            href: womenImageUrl,
            description: "Malowanie twarzy"
        },
    ];



    return (
        <>
            <div className="page">
                <div className="container">
                    <div className={`offer_carousel home_carousel${isVisible ? ' visible' : ''}`}>
                        <div className="home_carousel_title offer_carousel_title">SPRAWDŹ ATRAKCJE DODATKOWE!</div>
                        <div className="home_carousel-content">
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
                                {carousel.map((item, index) => (
                                    <div key={index} className="carousel-item">
                                        <img src={item.href} alt={item.name} />
                                        <p className={`carousel-description description-${index + 1}`}>{item.description}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="home_attractions">
                            {carousel.map((item, index) => (
                                <div key={index} className="home_attractions-item">
                                    <img src={item.href} alt={item.name} />
                                    <p className={`attractions-description description-${index + 1}`}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="home_carousel_button">
                            {data.map((item) => {
                                if (item.name === "ATRAKCJE") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic">ZOBACZ WSZYSTKIE!
                                        </Link>
                                    );
                                } return null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferCarouselAttractions