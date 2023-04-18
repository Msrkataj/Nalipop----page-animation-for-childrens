import React from 'react';
import Link from 'next/link';
import OfferHeader from "../Componets/_offer/OfferHeader";
import Footer from "../Componets/Home/Footer";
import AboutMeSection from '../Componets/_about/AboutMeSection';
import OfferBegin from "../Componets/_offer/OfferBegin";
import OfferList from "../Componets/_offer/OfferList";
import OfferCarousel from "../Componets/_offer/OfferCarousel";
import OfferMap from "../Componets/_offer/OfferMap";

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