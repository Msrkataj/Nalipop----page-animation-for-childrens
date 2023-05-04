import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import storage from "../../firebase";
import { ref, getDownloadURL, list, listAll } from "firebase/storage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const data = [
    {
        name: 'O MNIE',
        href: '/me',
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
        name: 'GALERIA',
        href: 'gallery',
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

const ContactContent = () => {
    const isVisible = useScrollAnimation('.contact-phone');
    const isVisible2 = useScrollAnimation('.contact-mail');

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className="contact">
                        <div className={`contact-phone${isVisible ? ' visible' : ''}`}>
                            <FontAwesomeIcon icon={faPhone} />
                            +48 795 103 108
                        </div>
                        <div className={`contact-mail${isVisible2 ? ' visible' : ''}`}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        animacje@nallipop.pl
                        </div>
                        <div className="button ">
                            {data.map((item) => {
                                if (item.name === "OFERTA") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic button-form button-contact">PRZEJDŹ DO<br/> FORMULARZA ZGŁOSZENIOWEGO
                                        </Link>
                                    );
                                } return null;
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ContactContent;