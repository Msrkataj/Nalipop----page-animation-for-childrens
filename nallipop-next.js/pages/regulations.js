import React from 'react';
import Footer from "../Componets/Home/Footer";
import RegulationsContent from "../Componets/_regulations/regulations";
import RegulationsHeader from "../Componets/_regulations/RegulationsHeader";

const Regulations = () => {
    return (
        <>
            <RegulationsHeader/>
            <main>
                <RegulationsContent/>
            </main>
            <Footer/>
        </>
    );
};

export default Regulations;