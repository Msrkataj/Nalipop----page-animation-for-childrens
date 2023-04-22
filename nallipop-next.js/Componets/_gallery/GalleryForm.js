import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const HomeForm = ({close}) => {

    const data = [
        {
            name: 'Start',
            href: '#',
        },
        {
            name: 'O MNIE',
            href: 'me',
        },
        {
            name: 'OFERTA',
            href: 'offer',
        },
        {
            name: 'ATRAKCJE',
            href: 'attractions',
        },
        {
            name: 'KONTAKT',
            href: 'contact',
        },
        {
            name: 'FORMULARZ',
            href: 'form',
        },
    ];



    return (
        <>
            <div className="page">
            </div>
            <div className="container">
                <div className="container-gallery">
                <div className="form-image">
                    <div className="form-image-girl-border">
                        <img className="form-image-girl" src="/assets/blonde-girl.png" alt="blonde-girl" />
                    </div>
                </div>
                <div className="gallery-form">
                    <h1>ZAREZERWUJ TERMIN JUŻ DZIŚ!</h1>
                    <div className="button ">
                        {data.map((item) => {
                            if (item.name === "OFERTA") {
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