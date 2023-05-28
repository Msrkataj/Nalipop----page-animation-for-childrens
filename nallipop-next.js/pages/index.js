import React from "react";
import Head from 'next/head';
import HomeHeader from "../Componets/Home/HomeHeader";
import Home_first_step from "../Componets/Home/Home_first_step";
import Home_carousel_attractions from "../Componets/Home/Home_carousel_attractions"
import Home_carousel_opinions from "../Componets/Home/Home_carousel_opinions"
import HomeForm from "../Componets/Home/Home-form"
import Footer from "../Componets/Home/Footer";
import Home_offer from "../Componets/Home/Home_offer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Nallipop - Animacje dla dzieci</title>
                <meta name="description"
                      content="Animacje Nallipop - dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze. Sprawdź naszą ofertę!"/>
                <meta name="keywords" content="animacje, dzieci, oferta, wynajem, zabawa"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/favicon.png"/>
                <meta property="og:title" content="Nallipop - Animacje dla dzieci"/>
                <meta property="og:description"
                      content="Animacje Nallipop - dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze. Sprawdź naszą ofertę!"/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.pl/"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json">
                    {`
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Nallipop - Animacje dla dzieci",
        "description": "Animacje Nallipop - dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze. Sprawdź naszą ofertę!",
        "url": "https://www.nallipop.pl/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warszawa",
            "addressCountry": "PL"
        },
        "telephone": "+48795103108",
        "email": "contact@nallipop.pl"
    }
`}
                </script>
            </Head>
            <header>
                <HomeHeader/>
            </header>
            <main>
                <Home_first_step/>
                <Home_offer/>
                <Home_carousel_attractions/>
                <Home_carousel_opinions/>
            </main>
            <footer>
                <HomeForm/>
                <Footer/>
            </footer>
        </>
    );
}
