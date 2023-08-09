import React from 'react';
import Footer from "../Componets/Home/Footer";
import ReservationHeader from "../Componets/_reservation/ReservationHeader";
import ReservationContent from "../Componets/_reservation/ReservationContent";
import Head from "next/head";

const Gallery = () => {
    return (
        <>
            <Head>
                <title>Rejestracja - Zarezerwuj termin | Nallipop</title>
                <meta name="description"
                      content="Zareserwuj termin i ciesz się z najlepszych animacji dla dzieci! Umów się już teraz."/>
                <meta name="keywords" content="animacje dla dzieci, rejestracja, klub, formularz, zgłoszenie"/>
                <link rel="icon" href="/assets/favicon.webp"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Rejestracja - Dołącz do naszego klubu | Nallipop"/>
                <meta property="og:description"
                      content="Zareserwuj termin i ciesz się z najlepszych animacji dla dzieci! Umów się już teraz."/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.com/registration"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header>
                <ReservationHeader/>
            </header>
            <main>
                <ReservationContent/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Gallery;