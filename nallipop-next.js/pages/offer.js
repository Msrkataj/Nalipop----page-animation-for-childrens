import React from 'react';
import OfferHeader from "../Componets/_offer/OfferHeader";
import OfferBegin from "../Componets/_offer/OfferBegin";
import OfferList from "../Componets/_offer/OfferList";
import OfferCarousel from "../Componets/_offer/OfferCarousel";
import OfferMap from "../Componets/_offer/OfferMap";
import OfferFooter from "../Componets/_offer/OfferFooter";
import Head from "next/head";

const Offer = () => {
    return (
        <>
            <Head>
                <title>Nasza Oferta - Animacje dla dzieci</title>
                <meta name="description"
                      content="Sprawdź naszą ofertę! Oferujemy najwyższej jakości animacje dla dzieci na wszelkiego rodzaju wydarzenia."/>
                <meta name="keywords" content="oferta, animacje, dzieci, eventy, zabawa"/>
                <link rel="icon" href="/assets/favicon.png"/>
                <meta property="og:title" content="Nasza Oferta - Animacje dla dzieci"/>
                <meta property="og:description"
                      content="Sprawdź naszą ofertę! Oferujemy najwyższej jakości animacje dla dzieci na wszelkiego rodzaju wydarzenia."/>
                <meta property="og:url" content="https://www.your-domain.com/offer"/>
                <script type="application/ld+json">
                    {`
    {
        "@context": "https://schema.org",
        "@type": "Offer",
        "itemOffered": {
            "@type": "Service",
            "name": "Usługi animacyjne dla dzieci",
            "description": "Oferta animacji dla dzieci na urodziny, chrzciny, wesela, uroczystości rodzinne, komunię i inne eventy. Najlepsza jakość usług dla Twojego dziecka.",
            "url": "https://www.nallipop.pl/offer",
            "serviceType": "Animacje dla dzieci",
            "areaServed": "Warszawa i okolice",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Nallipop",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Warszawa",
                    "addressCountry": "PL"
                },
                 "itemListElement": [
    {
      "@type": "OfferCatalog",
      "name": "Urodziny",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na urodziny"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Chrzciny",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na chrzciny"
          }
        }
      ]
    },
{
      "@type": "OfferCatalog",
      "name": "Komunia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na komunie"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Wesele",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na wesele"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Uroczystości rodzinne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na uroczystości rodzinne"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Eventy",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Animacja na eventy"
          }
        }
      ]
    },
      ]
                "telephone": "+48795103108",
                "email": "contact@nallipop.pl"
            }
        }
    }
`}
                </script>
            </Head>
            <header>
                <OfferHeader />
            </header>
            <main>
                <OfferBegin/>
                <OfferList/>
                <OfferCarousel/>
                <OfferMap/>
            </main>
            <footer>
                <OfferFooter/>
            </footer>
        </>
    );
};

export default Offer;