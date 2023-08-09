import React from 'react';

import Footer from "../Componets/Home/Footer";
import ContactHeader from "../Componets/_contact/ContactHeader";
import ContactContent from "../Componets/_contact/ContactContent";
import ContactMap from "../Componets/_contact/ContactMap";
import FooterContact from "../Componets/_contact/FooterContact";
import Head from "next/head";

const Gallery = () => {
    return (
        <>
            <Head>
                <title>Kontakt - Skontaktuj się z nami | Nallipop</title>
                <meta name="description"
                      content="Masz pytania? Skontaktuj się z nami! Jesteśmy tutaj, aby odpowiedzieć na wszystkie Twoje pytania o nasze animacje dla dzieci."/>
                <meta name="keywords" content="animacje dla dzieci, kontakt"/>
                <link rel="icon" href="/assets/favicon.webp"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Kontakt - Skontaktuj się z nami | Nallipop"/>
                <meta property="og:description"
                      content="Masz pytania? Skontaktuj się z nami! Jesteśmy tutaj, aby odpowiedzieć na wszystkie Twoje pytania o nasze animacje dla dzieci."/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.com/contact"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                    __html: `
    {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Kontakt - Nallipop",
        "description": "Masz pytania? Chcesz zarezerwować termin? Skontaktuj się z nami! Jesteśmy dostępni pod numerem telefonu +48795103108 lub przez email contact@nallipop.pl.",
        "url": "https://nallipop.pl/contact",
        "sameAs": ["https://www.facebook.com/nallipop"],
        "publisher": {
            "@type": "LocalBusiness",
            "name": "Nallipop",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Warszawa",
                "addressCountry": "PL"
            },
            "telephone": "+48795103108",
            "email": "contact@nallipop.pl"
        }
    }
    `
                }}
                    />
            </Head>
            <header>
                <ContactHeader/>
            </header>
            <main>
                <ContactContent/>
                <ContactMap/>
            </main>
            <footer>
                <FooterContact/>
            </footer>
        </>
    );
};

export default Gallery;