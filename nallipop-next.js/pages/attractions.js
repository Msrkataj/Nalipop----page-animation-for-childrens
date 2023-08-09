import React from 'react';
import Footer from "../Componets/Home/Footer";
import AttractionsBegin from "../Componets/_attractions/AttractionBegin";
import AttractionsHeader from "../Componets/_attractions/AttractionsHeader";
import AttractionsList from "../Componets/_attractions/AtractionsLIst";
import AttractionsExtra from "../Componets/_attractions/AttractionsExtra";
import HomeForm from "../Componets/Home/Home-form";
import Head from "next/head";

const Attractions = () => {
    return (
        <>
            <Head>
                <title>Atrakcje - Odkryj nasze wyjątkowe animacje dla dzieci | Nallipop</title>
                <meta name="description"
                      content="Odkryj nasze wyjątkowe animacje dla dzieci. Zabawa, edukacja i twórczość w jednym!"/>
                <meta name="keywords" content="animacje dla dzieci, atrakcje, zabawa, edukacja, kreatywność"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/favicon.webp"/>
                <meta property="og:title" content="Atrakcje - Odkryj nasze wyjątkowe animacje dla dzieci | Nallipop"/>
                <meta property="og:description"
                      content="Odkryj nasze wyjątkowe animacje dla dzieci. Zabawa, edukacja i twórczość w jednym!"/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://nallipopn.com/attractions"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
    {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Atrakcje dla dzieci",
        "description": "Różnorodne atrakcje dla dzieci, takie jak piniata, facepainting, slime, malowanie toreb, banki mydlane XXL, zabawy z chustą animacyjną, tatuaże brokatowe, zabawy ruchowe i wiele innych. Z nami Twoje dziecko będzie się bawiło jak nigdy!",
        "url": "https://nallipop.pl/attractions",
        "brand": "Nallipop",
        "offers": {
            "@type": "AggregateOffer",
            "itemListElement": [
           {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tatuaże brokatowe",
        }
      },
        {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kolorowe włosy",
        }
      },
        {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Konkursy i zabawy ruchowe",
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modelowanie balonów",
        }
      },
        {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zabawy z chustą animacyjną",
        }
      },
       {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zabawy z liną animacyjną",
        }
      },
        {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Układy taneczne",
        }
      },
         {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kącik plastyczny",
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Piniata",
          "price": "150"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Piniata XXL",
          "price": "300"
        }
      },
    {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facepainting",
          "price": "150"
        }
      },
       {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Banki mydlane XXL",
          "price": "80"
        }
      },
     {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zamykanie w bańce mydlanej",
          "price": "150"
        }
      },
     {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Slime",
          "price": "100"
        }
      },
        {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Malowanie toreb",
          "price": "150"
        }
      },
    ],
            "seller": {
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
    }
         `
                        }}
                />
            </Head>
            <header>
                <AttractionsHeader/>
            </header>
            <main>
                <AttractionsBegin/>
                <AttractionsList/>
                <AttractionsExtra/>
                <HomeForm/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Attractions;