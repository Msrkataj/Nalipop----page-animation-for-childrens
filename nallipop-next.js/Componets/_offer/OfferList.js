import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from '../data/data.json';


const OfferList = ({close}) => {
    const isVisible = useScrollAnimation('.offer-list-birthday');
    const isVisible2 = useScrollAnimation('.offer-list-communion');
    const isVisible3 = useScrollAnimation('.offer-list-christening');
    const isVisible4 = useScrollAnimation('.offer-list-family');
    const isVisible5 = useScrollAnimation('.offer-list-wedding');
    const isVisible6 = useScrollAnimation('.offer-info-price');
    const isVisible7 = useScrollAnimation('.offer-info-package');
    const [selectedOffer, setSelectedOffer] = useState(null);

    const offers = [
        { name: 'birthday', title: 'ANIMACJĘ NA URODZINY', img: 'assets/birthday.jpg', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
        { name: 'communion', title: 'ANIMACJĘ NA KOMUNIĘ', img: '/assets/communion.jpg', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
        { name: 'christening', title: 'ANIMACJĘ NA CHRZCINY', img: '/assets/christening.jpg', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
        { name: 'family', title: 'UROCZYSTOŚCI RODZINNE', img: '/assets/family.png', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
        { name: 'wedding', title: 'ANIMACJĘ NA WESELE', img: '/assets/wedding.jpg', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
        { name: 'events', title: 'ANIMACJĘ NA EVENTY', img: '/assets/other.jpg', price: '150 zł/h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget nisl.'},
    ];

    const handleOfferClick = (offer) => {
        setSelectedOffer(offer);
    };

    return (
        <>
            <div className="container">
                <section className="offer-list">
                    <h2>JEDNA CENA NA KAŻDĄ OKAZJĘ!</h2>
                    <div className="offer-list-section">
                        <div className="offer-list-section-options">
                            {offers.map(offer => (
                                <p className={`offer-list-${offer.name.toLowerCase().replace(' ', '-')} ${selectedOffer === offer ? 'clicked' : ''}`} onClick={() => handleOfferClick(offer)}>
                                    {offer.title}
                                </p>
                            ))}
                        </div>
                        {selectedOffer && (
                            <div className="offer-list-section-option">
                                <div className="offer-list-section-header">{selectedOffer.title}</div>
                                <img className="offer-list-section-photo" src={selectedOffer.img} alt="offer"/>
                                <div className="offer-list-section-text">{selectedOffer.text}</div>
                                <div className="offer-list-section-price">{selectedOffer.price}</div>
                            </div>
                        )}
                    </div>
                    {/*<div className="offer-list-row">*/}
                    {/*<div className={`offer-list-section offer-list-birthday${isVisible ? ' visible' : ''}`}>*/}
                    {/*    <img className="offer-list-section-photo" src="/assets/birthday.jpg" alt="birthday"/>*/}
                    {/*    <div className="offer-list-section-header">ANIMACJĘ NA URODZINY</div>*/}
                    {/*</div>*/}
                    {/*<div className={`offer-list-section offer-list-communion${isVisible2 ? ' visible' : ''}`}>*/}
                    {/*    <img className="offer-list-section-photo" src="/assets/communion.jpg" alt="communion"/>*/}
                    {/*    <div className="offer-list-section-header">ANIMACJĘ NA KOMUNIĘ</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="offer-list-row">*/}
                    {/*<div className={`offer-list-section offer-list-christening${isVisible3 ? ' visible' : ''}`}>*/}
                    {/*    <img className="offer-list-section-photo" src="/assets/christening.jpg" alt="christening"/>*/}
                    {/*    <div className="offer-list-section-header">ANIMACJĘ NA CHRZCINY</div>*/}
                    {/*</div>*/}
                    {/*<div className={`offer-list-section offer-list-family${isVisible4 ? ' visible' : ''}`}>*/}
                    {/*    <img className="offer-list-section-photo" src="/assets/family.png" alt="family"/>*/}
                    {/*    <div className="offer-list-section-header">UROCZYSTOŚCI RODZINNE</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className={`offer-list-section offer-list-wedding${isVisible5 ? ' visible' : ''}`}>*/}
                    {/*    <img className="offer-list-section-photo" src="/assets/wedding.jpg" alt="wedding"/>*/}
                    {/*    <div className="offer-list-section-header">ANIMACJĘ NA WESELE</div>*/}
                    {/*</div>*/}
                </section>
                <section className="offer-info">
                    <div className={`offer-info-price${isVisible6 ? ' visible' : ''}`}>
                        <div className="offer-info-price-number">150 zł/h</div>
                    </div>
                    <div className="curve-line-left"></div>
                    <div className="curve-line-right"></div>
                    <div className={`offer-info-package${isVisible7 ? ' visible' : ''}`}>
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