import React from 'react';
import Link from 'next/link';
import Footer from "../Componets/Home/Footer";
import AttractionsBegin from "../Componets/_attractions/AttractionBegin";
import AttractionsHeader from "../Componets/_attractions/AttractionsHeader";
import AttractionsList from "../Componets/_attractions/AtractionsLIst";
import AttractionsExtra from "../Componets/_attractions/AttractionsExtra";
import HomeForm from "../Componets/Home/Home-form";

const Offer = () => {
    return (
        <>
            <AttractionsHeader/>
            <main>
                <AttractionsBegin/>
                <AttractionsList/>
                <AttractionsExtra/>
                <HomeForm/>
            </main>
            <Footer/>
        </>
    );
};

export default Offer;