import React from "react";
import Link from 'next/link';
import data from '../data/data.json';


const HomeForm = () => {


    return (
        <>
            <div className="container">
                <div className="container-gallery">
                    <div className="form-image form-image-gallery">
                    <div className="form-image-girl-border">
                        <img className="form-image-girl" src="/assets/blonde-girl.webp" alt="blonde-girl" />
                    </div>
                </div>
                <div className="gallery-form">
                    <h1>ZAREZERWUJ TERMIN JUŻ DZIŚ!</h1>
                    <div className="button ">
                        {data.map((item) => {
                            if (item.name === "FORMULARZ REZERWACJI") {
                                return (
                                    <Link key={item.href} href={item.href} className="button-classic button-form">FORMULARZ ZGŁOSZENIOWY
                                    </Link>
                                );
                            } return null;
                        })}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default HomeForm