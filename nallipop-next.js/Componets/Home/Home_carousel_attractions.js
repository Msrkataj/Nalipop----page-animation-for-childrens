import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const HomeCarouselAttractions = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

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

    const carousel = [
        {
            name: 'balloons',
            href: '/assets/balon.png',
            description: "Modelowanie balonów"
        },
        {
            name: 'piniata',
            href: '/assets/piniata.png',
            description: "Piniaty!"

        },
        {
            name: 'women',
            href: '/assets/women-paint.png',
            description: "Malowanie twarzy"
        },
    ];



    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="home_carousel">
                        <div className="home_carousel_title">NASZE ATRAKCJE</div>
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