import React from 'react';
import Footer from "../Componets/Home/Footer";
import RegulationsContent from "../Componets/_regulations/regulations";
import RegulationsHeader from "../Componets/_regulations/RegulationsHeader";
import Head from "next/head";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Regulamin - Dowiedz się więcej o naszych zasadach | Nallipop</title>
                <meta name="description"
                      content="Dowiedz się więcej o naszych zasadach. Przeczytaj nasz regulamin, aby dowiedzieć się, jak działamy."/>
                <meta name="keywords" content="animacje dla dzieci, regulamin, zasady"/>
                <link rel="icon" href="/assets/favicon.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Regulamin - Dowiedz się więcej o naszych zasadach | Nallipop"/>
                <meta property="og:description"
                      content="Dowiedz się więcej o naszych zasadach. Przeczytaj nasz regulamin, aby dowiedzieć się, jak działamy."/>
                <meta property="og:image" content="/assets/logo.png"/>
                <meta property="og:url" content="https://www.nallipop.com/terms"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header>
                <RegulationsHeader/>
            </header>
            <main>
                <RegulationsContent/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Terms;