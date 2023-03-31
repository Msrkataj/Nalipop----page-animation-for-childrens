import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


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
            href: '/assets/women.png',
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
                            >
                                {carousel.map((item, index) => (
                                    <div key={index} className="carousel-item">
                                        <img src={item.href} alt={item.name} />
                                        <p className="carousel-description">{item.description}</p>
                                    </div>
                                ))}
                            </Carousel>
                            <div className="control-next.control-arrow">
                                <FontAwesomeIcon icon={faArrowCircleLeft} className="w-9 h-9 text-white" />
                            </div>
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