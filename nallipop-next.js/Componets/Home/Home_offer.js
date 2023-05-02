import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
// import { isInViewport } from '/utils/isInViewport.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBirthdayCake);
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const HomeOffer = () => {
    const isVisible = useScrollAnimation('.home_offer');

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

    return (
        <>
            <div className="page">
                <div className="container">
                    <div className={`home_offer${isVisible ? ' visible' : ''}`}>
                        <div className="home_offer_title">ANIMACJĘ NA KAŻDĄ OKAZJĘ</div>
                        <div className="home_offer-content">
                           <div className="home_offer_square home_offer_square_birthday">
                               <FontAwesomeIcon icon={faBirthdayCake} />
                               <h2>Urodziny</h2>
                           </div>
                            <div className="home_offer_square home_offer_square_christening">
                                <FontAwesomeIcon icon={faBirthdayCake} />
                                <h2>Chrzciny</h2>
                            </div>
                            <div className="home_offer_square home_offer_square_wedding">
                                <FontAwesomeIcon icon={faBirthdayCake} />
                                <h2>Wesele</h2>
                            </div>
                            <div className="home_offer_square home_offer_square_family">
                                <FontAwesomeIcon icon={faBirthdayCake} />
                                <h2>Uroczystości Rodzinne</h2>
                            </div>
                            <div className="home_offer_square home_offer_square_other">
                                <FontAwesomeIcon icon={faBirthdayCake} />
                                <h2>Inne</h2>
                            </div>
                        </div>
                        <div className="home_carousel_button home_offer_button">
                            {data.map((item) => {
                                if (item.name === "OFERTA") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic">ZOBACZ OFERTĘ!
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

export default HomeOffer;

