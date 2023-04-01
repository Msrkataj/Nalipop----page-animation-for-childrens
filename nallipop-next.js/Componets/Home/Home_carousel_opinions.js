import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const HomeCarouselOpinions= ({close}) => {
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
                    <h1 className="opinion-title">PRZEŻYJ NIESAMOWITE EMOCJE!</h1>
                    <div className="home_carousel home_carousel-opinion">
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
                                            {carousel.map((item, index) => (
                                                <div key={index} className="carousel-item">
                                                    <img src={item.href} alt={item.name} />
                                                    <p className={`carousel-description description-${index + 1}`}>{item.description}</p>
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
            </div>
        </>
    )
}

export default HomeCarouselOpinions