import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBirthdayCake);


const HomeOffer = ({close}) => {
    const [balloonsImageUrl, setBalloonsImageUrl] = useState(null);
    const [piniataImageUrl, setPiniataImageUrl] = useState(null);
    const [womenImageUrl, setWomenImageUrl] = useState(null);

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



    // useEffect(() => {
    //     const storageRefBalloons = ref(storage, "atractions/balon.png");
    //     const storageRefPiniata = ref(storage, "atractions/piniata.png");
    //     const storageRefWomen = ref(storage, "atractions/women-paint.png");
    //     getDownloadURL(storageRefBalloons)
    //         .then((url) => setBalloonsImageUrl(url))
    //         .catch((error) => console.error("Error getting balloons image URL:", error));
    //
    //     getDownloadURL(storageRefPiniata)
    //         .then((url) => setPiniataImageUrl(url))
    //         .catch((error) => console.error("Error getting piniata image URL:", error));
    //
    //     getDownloadURL(storageRefWomen)
    //         .then((url) => setWomenImageUrl(url))
    //         .catch((error) => console.error("Error getting women image URL:", error));
    // }, []);
    //
    //
    // const carousel = [
    //     {
    //         name: 'balloons',
    //         href: balloonsImageUrl, // Użyj URL pobranego z Firebase Storage
    //         description: "Modelowanie balonów"
    //     },
    //     {
    //         name: 'piniata',
    //         href: piniataImageUrl,
    //         description: "Piniaty!"
    //
    //     },
    //     {
    //         name: 'women',
    //         href: womenImageUrl,
    //         description: "Malowanie twarzy"
    //     },
    // ];



    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="home_offer">
                        <div className="home_offer_title">ANIMACJĘ NA KAŻDĄ IMPREZĘ</div>
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

export default HomeOffer