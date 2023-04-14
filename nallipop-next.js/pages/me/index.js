import React from 'react';
import Link from 'next/link';
import HomeHeader from "../Componets/Home/HomeHeader";
import Footer from "../Componets/Home/Footer";
import AboutMeSection from './_about/AboutMeSection';


const AboutMe = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <h1>O mnie</h1>
                <AboutMeSection />
                <Link href="/">
                    Powrót do strony głównej
                </Link>
            </main>

            <Footer/>
        </>
    );
};

export default AboutMe;