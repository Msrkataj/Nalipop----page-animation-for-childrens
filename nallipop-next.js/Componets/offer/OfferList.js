import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const OfferList = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

    const data = [
        {
            name: 'O MNIE',
            href: '/me',
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
            name: 'GALERIA',
            href: 'gallery',
        },
        {
            name: 'KONTAKT',
            href: 'contact',
        },
        {
            name: 'FORMULARZ',
            href: 'form',
        },
    ];


    return (
        <>
            <div className="container">
                <section className="offer-list">
                    <h2>JEDNA CENA NA KAŻDĄ OKAZJĘ!</h2>
                    <div className="offer-list-row">
                    <div className="offer-list-section offer-list-birthday">
                        <img className="offer-list-section-photo" src="/assets/birthday.jpg" alt="birthday"/>
                        <div className="offer-list-section-header">ANIMACJĘ NA URODZINY</div>
                    </div>
                    <div className="offer-list-section offer-list-communion">
                        <img className="offer-list-section-photo" src="/assets/communion.jpg" alt="communion"/>
                        <div className="offer-list-section-header">ANIMACJĘ NA KOMUNIĘ</div>
                    </div>
                    </div>
                    <div className="offer-list-row">
                    <div className="offer-list-section offer-list-christening">
                        <img className="offer-list-section-photo" src="/assets/christening.jpg" alt="christening"/>
                        <div className="offer-list-section-header">ANIMACJĘ NA CHRZCINY</div>
                    </div>
                    <div className="offer-list-section offer-list-family">
                        <img className="offer-list-section-photo" src="/assets/family.jpg" alt="family"/>
                        <div className="offer-list-section-header">ANIMACJĘ NA UROCZYSTOŚCI RODZINNE</div>
                    </div>
                    </div>
                    <div className="offer-list-section offer-list-wedding">
                        <img className="offer-list-section-photo" src="/assets/wedding.jpg" alt="wedding"/>
                        <div className="offer-list-section-header">ANIMACJĘ NA WESELE</div>
                    </div>
                </section>
                <section className="offer-info">
                    <div className="offer-info-price">
                        <div className="offer-info-price-number">150 zł/h</div>
                    </div>
                    <div className="offer-info-package">
                        <h3>ATRAKCJE W PAKIECIE</h3>
                        <div className="offer-info-package-list">
                            <ul>
                                <li>zabawy z chustą animacyjną</li>
                                <li>malowanie twarzy</li>
                                <li>warsztat balonowy</li>
                                <li>stanowisko małego konstruktora</li>
                                <li>zabawy z liną animacyjną</li>
                                <li>gry sportowe</li>
                                <li>układy taneczne</li>
                                <li>konkurencje drużynowe</li>
                                <li>zabawy ruchowe</li>
                                <li>kącik plastyczny</li>
                            </ul>
                        </div>
                        <div className="button button-header button-offer">
                            {data.map((item) => {
                                if (item.name === "ATRAKCJE") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic">ZOBACZ WIĘCEJ
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OfferList