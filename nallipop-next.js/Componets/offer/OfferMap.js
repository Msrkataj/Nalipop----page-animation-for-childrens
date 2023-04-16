import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const OfferMap = ({close}) => {
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    const handleImageClick = ()=> {
        setIsImageZoomed(!isImageZoomed);
    }

    return (
        <>
            <div className="container">
                <section className="offer_map">
                    <h1>GDZIE NAS ZNAJDZIESZ?</h1>
                    <p className={`${isImageZoomed ? 'close' : ''}`} onClick={handleImageClick}
                    >KLIKNIJ, ŻEBY POWIĘKSZYĆ</p>
                    <img
                        className={`offer-list-section-photo ${isImageZoomed ? 'zoomed' : ''}`} src="/assets/map.png" alt="map"
                        onClick={handleImageClick}
                    />
                    <div className="offer_map_description">
                        <h2>MASZ PYTANIA DO LOKALIZACJI?<br/>NAPISZ!<br/>NA PEWNO POMOŻEMY</h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OfferMap