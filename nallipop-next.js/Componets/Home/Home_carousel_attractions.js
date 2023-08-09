import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import storage from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import data from '../data/data.json';
import Image from "next/image";

const HomeCarouselAttractions = () => {
    const [balloonsImageUrl, setBalloonsImageUrl] = useState(null);
    const [piniataImageUrl, setPiniataImageUrl] = useState(null);
    const [womenImageUrl, setWomenImageUrl] = useState(null);
    const isVisible = useScrollAnimation('.home_carousel');



    useEffect(() => {
        const storageRefBalloons = ref(storage, "atractions/balony.webp");
        const storageRefPiniata = ref(storage, "atractions/piniata.webp");
        const storageRefWomen = ref(storage, "atractions/women-paint.webp");
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
            href: balloonsImageUrl,
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
                    <div className={`home_carousel${isVisible ? ' visible' : ''}`}>
                        <h1 className="home_carousel_title">NASZE ATRAKCJE</h1>
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
                                {carousel.map((item, index) => {
                                    if (item.href) {
                                        return (
                                            <div key={index} className="carousel-item">
                                                <Image
                                                    src={item.href}
                                                    alt={item.name}
                                                    layout='responsive'
                                                    width={1324}
                                                    height={1324}
                                                />
                                                <p className={`carousel-description description-${index + 1}`}>{item.description}</p>
                                            </div>
                                        )
                                    }
                                    return null;
                                })}
                            </Carousel>
                        </div>
                        <div className="home_attractions">
                            {carousel.map((item, index) => {
                                if (item.href) {
                                    return (
                                        <div key={index} className="home_attractions-item">
                                            <Image
                                                src={item.href}
                                                alt={item.name}
                                                layout='responsive'
                                                width={1324}
                                                height={1324}
                                            />
                                            <p className={`attractions-description description-${index + 1}`}>{item.description}</p>
                                        </div>
                                    )
                                }
                                return null;
                            })}
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

export default HomeCarouselAttractions