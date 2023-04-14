import React from 'react';
import Link from 'next/link';
import AboutHeader from "../Componets/_about/AboutHeader";
import Footer from "../Componets/Home/Footer";
import AboutMeSection from '../Componets/_about/AboutMeSection';


const AboutMe = () => {
    return (
        <>
            <AboutHeader />
            <main>
                <AboutMeSection />
            </main>
            <Footer/>
        </>
    );
};

export default AboutMe;
