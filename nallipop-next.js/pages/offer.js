import React from 'react';
import Link from 'next/link';
import OfferHeader from "../Componets/offer/OfferHeader";
import Footer from "../Componets/Home/Footer";
import AboutMeSection from '../Componets/_about/AboutMeSection';
import OfferBegin from "../Componets/offer/OfferBegin";
import OfferList from "../Componets/offer/OfferList";
import OfferCarousel from "../Componets/offer/OfferCarousel";
import OfferMap from "../Componets/offer/OfferMap";

const Offer = () => {
    return (
        <>
            <OfferHeader />
            <main>
                <OfferBegin/>
                <OfferList/>
                <OfferCarousel/>
                <OfferMap/>
            </main>
            <Footer/>
        </>
    );
};

export default Offer;