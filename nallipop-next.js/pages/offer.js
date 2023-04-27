import React from 'react';
import Link from 'next/link';
import OfferHeader from "../Componets/_offer/OfferHeader";
import OfferBegin from "../Componets/_offer/OfferBegin";
import OfferList from "../Componets/_offer/OfferList";
import OfferCarousel from "../Componets/_offer/OfferCarousel";
import OfferMap from "../Componets/_offer/OfferMap";
import OfferFooter from "../Componets/_offer/OfferFooter";

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
            <OfferFooter/>
        </>
    );
};

export default Offer;