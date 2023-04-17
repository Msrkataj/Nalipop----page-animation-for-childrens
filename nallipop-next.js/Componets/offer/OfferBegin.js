import React from 'react';
import Link from 'next/link';

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

const OfferBegin = () => {
    return (
        <>
            <div className="page">
                <div className="color-line color-line-offer">
                    <img className="home-about_me-logo" src="/assets/line2.png" alt="Opis obrazka" />
                </div>
                <div className="container">
                    <section className="offer">
                        <div className="offer-content">
                            <div className="offer-content-text">
                                Oferujemy animacje dla dzieci na wiele różnych okazji ! <br/>Przygotuje świetną zabawę dla dzieci na komunię, urodziny, chrzciny, uroczystości rodzinne i wiele innych imprez. Bez względu na to, jaka jest okazja, z nami Twoje dziecko i jego małych gości nigdy się nie nudzą. Skontaktuj się z nami, a pomogę Ci wybrać najlepszą animację dla Twojego dziecka i jego gości!
                            </div>
                        </div>
                        <div className="button button-header button-offer">
                            {data.map((item) => {
                                if (item.name === "OFERTA") {
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