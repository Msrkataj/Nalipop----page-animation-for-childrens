import React from 'react';
import Link from 'next/link';
import Footer from "../Componets/Home/Footer";
import AttractionsBegin from "../Componets/_attractions/AttractionBegin";
import AttractionsHeader from "../Componets/_attractions/AttractionsHeader";
import AttractionsList from "../Componets/_attractions/AtractionsLIst";

const Offer = () => {
    return (
        <>
            <AttractionsHeader/>
            <main>
                <AttractionsBegin/>
                <AttractionsList/>
            </main>
            <Footer/>
        </>
    );
};

export default Offer;