import React, {useState, useEffect, createRef} from "react";
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from '../data/data.json';


const OfferList = ({close}) => {
    const isVisible = useScrollAnimation('.offer-list');
    const isVisible2 = useScrollAnimation('.offer-list-communion');
    const isVisible3 = useScrollAnimation('.offer-list-christening');
    const isVisible4 = useScrollAnimation('.offer-list-family');
    const isVisible5 = useScrollAnimation('.offer-list-wedding');
    const isVisible6 = useScrollAnimation('.offer-info-price');
    const isVisible7 = useScrollAnimation('.offer-info-package');
    const [selectedOffer, setSelectedOffer] = useState(null);
    const offerRef = createRef();

    const offers = [
        { name: 'birthday', title: 'ANIMACJĘ NA URODZINY', img: 'assets/birthday.jpg', price: '150 zł/h',
            text: 'Urodziny to dzień pełen radości i niespodzianek, dzięki animacjom stanie się on jeszcze bardziej magiczny! Sprawimy, że każda minuta tej wyjątkowej uroczystości będzie niezapomniana. Oferujemy zabawy pełne kreatywności, ekscytujące gry oraz niepowtarzalne atrakcje, które na długo pozostaną w pamięci Twojego dziecka i jego gości. Niech ten dzień stanie się prawdziwą bajką!'},
        { name: 'communion', title: 'ANIMACJĘ NA KOMUNIĘ', img: '/assets/communion.png', price: '150 zł/h',
            text: 'Komunia Święta to wyjątkowe wydarzenie w życiu każdego dziecka. Dzięki animacjom, ten sakramentalny dzień stanie się jeszcze bardziej niezapomniany, łącząc duchową atmosferę uroczystości z radosną zabawą. Nasze animacje, są dostosowane do tego ważnego momentu, wprowadzą dzieci w niepowtarzalny świat fantazji i zabawy, respektując jednocześnie świętość tej chwili.'},
        { name: 'christening', title: 'ANIMACJĘ NA CHRZCINY', img: '/assets/christening.jpg', price: '150 zł/h',
            text: 'Chrzciny to nie tylko duchowe przyjęcie dziecka do społeczności Kościoła, ale również wyjątkowa okazja do radosnego świętowania w gronie najbliższych. Sprawimy że nawet najmłodsi goście będą mogli w pełni cieszyć się tą ważną uroczystością. Nasze zabawy i gry, dostosowane do wieku i zainteresowań maluchów, zapewnią im nie tylko mnóstwo uśmiechu, ale także bezpieczne i kreatywne zajęcie.'},
        { name: 'family', title: 'UROCZYSTOŚCI RODZINNE', img: '/assets/family.png', price: '150 zł/h',
            text: 'Uroczystości rodzinne to magiczne momenty, które stają się jeszcze bardziej niezapomniane z naszymi animacjami. Różnorodne i dostosowane do wieku atrakcje wprowadzą nastrój radosnej zabawy, budując cenne wspomnienia dla wszystkich członków rodziny. Przygotowujemy dla Was pełen emocji i kreatywności program - od energicznych gier, przez inspirujące warsztaty, po niezwykłe pokazy.'},
        { name: 'wedding', title: 'ANIMACJĘ NA WESELE', img: '/assets/wedding.png', price: '150 zł/h',
            text: 'Wesele to jeden z najważniejszych dni w życiu, a my jesteśmy tutaj, aby uczynić go jeszcze bardziej niezapomnianym. Nasze animacje zapewnią zabawę dla najmłodszych gości, pozwalając dorosłym cieszyć się uroczystością bez zmartwień. Od kreatywnych warsztatów, przez magiczne pokazy, aż po energetyczne gry - gwarantujemy, że dzieci będą miały swój własny, niezapomniany ślubny bal.'},
        { name: 'events', title: 'ANIMACJĘ NA POZOSTAŁE EVENTY', img: '/assets/events.png', price: '150 zł/h',
            text: 'Niezależnie od okazji, nasi animatorzy wnoszą do każdej imprezy energię i kreatywność. Eventy, imprezy szkolne, firmowe czy inne okazje - nasza profesjonalna obsługa animacyjna gwarantuje niezapomniane wrażenia dla uczestników każdej grupy wiekowej. Tworzymy atmosferę radości, zaskakujemy niebanalnymi pomysłami, a przede wszystkim - sprawiamy, że każdy moment jest pełen zabawy.'},
    ];

    const handleOfferClick = (offer) => {
        setSelectedOffer(offer);
        if (window.innerWidth <= 1024) {
            offerRef.current.scrollIntoView({behavior: 'smooth'});
        }
        if (offerRef.current) {
            offerRef.current.classList.remove('fadeInDown');
            void offerRef.current.offsetWidth;
            offerRef.current.classList.add('fadeInDown');
        }
    };



    useEffect(() => {
        if (selectedOffer && offerRef.current) {
            if (window.innerWidth <= 1024) {
                offerRef.current.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [selectedOffer]);

    return (
        <>
            <div className="container">
                <section className={`offer-list${isVisible ? ' visible' : ''}`}>
                    <h2>SPRAWDŹ I WYBIERZ!</h2>
                    <div className="offer-list-section">
                        <div className="offer-list-section-options">
                            {offers.map(offer => (
                                <p onClick={() => handleOfferClick(offer)}>
                                    {offer.title}
                                </p>
                            ))}
                        </div>
                        {selectedOffer && (
                            <div ref={offerRef} className="offer-list-section-option fadeInDown">
                                <div className="fadeInDown offer-list-section-header">{selectedOffer.title}</div>
                                <img className="fadeInDown offer-list-section-photo" src={selectedOffer.img} alt="offer"/>
                                <div className="fadeInDown offer-list-section-text">{selectedOffer.text}</div>
                                <div className="fadeInDown offer-list-section-price">{selectedOffer.price}</div>
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
                    {/*<div className={`offer-info-price${isVisible6 ? ' visible' : ''}`}>*/}
                    {/*    <div className="offer-info-price-number">150 zł/h</div>*/}
                    {/*</div>*/}
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