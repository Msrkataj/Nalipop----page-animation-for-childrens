import React from 'react';

import Footer from "../Componets/Home/Footer";
import GalleryContent from "../Componets/_gallery/GalleryContent";
import GalleryHeader from "../Componets/_gallery/GalleryHeader";
import GalleryForm from "../Componets/_gallery/GalleryForm";
import Head from "next/head";

const Gallery = () => {
    return (
        <>
            <Head>
                <title>Galeria - Zobacz nasze realizacje | Nallipop</title>
                <meta name="description"
                      content="Zobacz nasze realizacje! Sprawdź, jakie wspaniałe animacje dla dzieci już zorganizowaliśmy."/>
                <meta name="keywords" content="animacje dla dzieci, galeria, realizacje"/>
                <link rel="icon" href="/assets/favicon.webp"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Galeria - Zobacz nasze realizacje | Nallipop"/>
                <meta property="og:description"
                      content="Zobacz nasze realizacje! Sprawdź, jakie wspaniałe animacje dla dzieci już zorganizowaliśmy."/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.com/gallery"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
    {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Galeria Nallipop",
        "description": "Przejrzyj naszą galerię i zobacz jak wspaniale bawią się dzieci podczas naszych animacji. Na zdjęciach możesz zobaczyć różne atrakcje, które oferujemy. Zobacz nas w akcji!",
        "url": "https://nallipop.pl/gallery",
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
                <GalleryHeader/>
            </header>
            <main>
                <GalleryContent/>
                <GalleryForm/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Gallery;