import React from "react";
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBirthdayCake);
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import data from '../data/data.json';


const HomeOffer = () => {
    const isVisible = useScrollAnimation('.home_offer');

    return (
        <>
            <div className="page">
                <div className="container">
                    <div className={`home_offer${isVisible ? ' visible' : ''}`}>
                        <h1 className="home_offer_title">ANIMACJE NA KAŻDĄ OKAZJĘ</h1>
                        <div className="home_offer-content">
                           <div className="home_offer-content_square home_offer-content_birthday">
                               <FontAwesomeIcon icon={faBirthdayCake} />
                               <h2>Urodziny</h2>
                           </div>
                            <div className="home_offer-content_square home_offer-content_christening">
                                <div></div>
                                <h2>Chrzciny</h2>
                            </div>
                            <div className="home_offer-content_square home_offer-content_wedding">
                                <div></div>
                                <h2>Wesele</h2>
                            </div>
                            <div className="home_offer-content_square home_offer-content_family">
                                <div></div>
                                <h2>Uroczystości Rodzinne</h2>
                            </div>
                            <div className="home_offer-content_square home_offer-content_other">
                                <div></div>
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

