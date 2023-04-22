import React from 'react';

import Footer from "../Componets/Home/Footer";
import ReservationHeader from "../Componets/_reservation/ReservationHeader";
import ReservationContent from "../Componets/_reservation/ReservationContent";

const Gallery = () => {
    return (
        <>
            <ReservationHeader/>
            <main>
                <ReservationContent/>
            </main>
            <Footer/>
        </>
    );
};

export default Gallery;