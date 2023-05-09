import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from '../data/data.json';


const HomeForm = ({close}) => {
    const isVisible = useScrollAnimation('.home-form');



    return (
        <>
            <div className="page">
                </div>
                <div className="container">
                    <div className={`home-form${isVisible ? ' visible' : ''}`}>
                       <h1>UMÓW SIĘ JUŻ DZIŚ</h1>
                        <p>SZYBKA REZERWACJA ONLINE</p>
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
                    <div className="form-image">
                        <div className="form-image-girl-border">
                            <img className="form-image-girl" src="/assets/blonde-girl.png" alt="blonde-girl" />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default HomeForm