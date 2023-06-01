import React from 'react';
import AboutHeader from "../Componets/_about/AboutHeader";
import Footer from "../Componets/Home/Footer";
import AboutMeSection from '../Componets/_about/AboutMeSection';
import Head from "next/head";


const AboutMe = () => {
    return (
        <>
            <Head>
                <title>O mnie - Poznaj twórcę najpiękniejszych animacji dla dzieci | Nallipop</title>
                <meta name="description"
                      content="Dowiedz się więcej o twórcy Nallipop - twórcy najpiękniejszych animacji dla dzieci. Nasza misja, wartości i wizja."/>
                <meta name="keywords" content="animacje dla dzieci, o mnie, misja, wartości, wizja"/>
                <link rel="icon" href="/assets/favicon.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title"
                      content="O mnie - Poznaj twórcę najpiękniejszych animacji dla dzieci | Nallipop"/>
                <meta property="og:description"
                      content="Dowiedz się więcej o twórcy Nallipop - twórcy najpiękniejszych animacji dla dzieci. Nasza misja, wartości i wizja."/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.com/about"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json">
                    {`
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Natalia Marciniak",
        "description": "Opis o Tobie. Możesz opowiedzieć o swojej pasji do animacji, jak zaczęła się Twoja przygoda z Nallipop i dlaczego kochasz to, co robisz. Nie zapomnij wspomnieć o swoim doświadczeniu i umiejętnościach.",
        "url": "https://www.nallipop.pl/about",
        "sameAs": ["https://www.facebook.com/nallipop"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warszawa",
            "addressCountry": "PL"
        },
        "email": "contact@nallipop.pl"
    }
`}
                </script>
            </Head>
            <header>
                <AboutHeader/>
            </header>
            <main>
                <AboutMeSection/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default AboutMe;
