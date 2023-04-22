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

const ReservationContent = () => {
    return (
        <>
            <div className="page">
                <div className="color-line color-line-offer">
                    <img className="home-about_me-logo" src="/assets/line2.png" alt="Opis obrazka" />
                </div>
                <div className="container">
                    <section className="reservation">
                    </section>
                </div>
            </div>
        </>
    )
}

export default ReservationContent;