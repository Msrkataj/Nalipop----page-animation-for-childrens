import React from 'react';
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from "../data/data";

const OfferBegin = () => {

    const isVisible = useScrollAnimation('.offer');
    return (
        <>
            <div className="page">
                <div className="container">
                    <section className={`offer_carousel offer${isVisible ? ' visible' : ''}`}>
                        <div className="offer-content">
                            <div className="offer-content-text">
                                Oferujemy animacje dla dzieci na wiele różnych okazji ! <br/>Przygotuje świetną zabawę dla dzieci na komunię, urodziny, chrzciny, uroczystości rodzinne i wiele innych imprez. Bez względu na to, jaka jest okazja, z nami Twoje dziecko i jego małych gości nigdy się nie nudzą. Skontaktuj się z nami, a pomogę Ci wybrać najlepszą animację dla Twojego dziecka i jego gości!
                            </div>
                        </div>
                        <div className="button button-header button-offer">
                            {data.map((item) => {
                                if (item.name === "FORMULARZ REZERWACJI") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic">FORMULARZ KONTAKTOWY
                                        </Link>
                                    );
                                } return null;
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default OfferBegin;