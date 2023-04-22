import React from 'react';

import Footer from "../Componets/Home/Footer";
import ContactHeader from "../Componets/_contact/ContactHeader";
import ContactContent from "../Componets/_contact/ContactContent";
import ContactMap from "../Componets/_contact/ContactMap";
import FooterContact from "../Componets/_contact/FooterContact";

const Gallery = () => {
    return (
        <>
            <ContactHeader/>
            <main>
                <ContactContent/>
                <ContactMap/>
            </main>
            <FooterContact/>
        </>
    );
};

export default Gallery;