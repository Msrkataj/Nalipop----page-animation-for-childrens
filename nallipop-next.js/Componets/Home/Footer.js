import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
import {useForm, ValidationError} from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = ({close}) => {
    const [state, handleSubmit] = useForm("xoqzkkbn");

    if (state.succeeded) {
        return <p className="success-message">Dziękujemy za wysłanie wiadomości!</p>;
    }

    const data = [
        {
            name: 'O NAS',
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
            name: 'GALERIA',
            href: 'contact',
        },
        {
            name: 'KONTAKT',
            href: 'contact',
        },
    ];


    return (
        <>
            <div className="page">
            </div>
            <div className="container">
                <div className="footer">
                <div className="footer-contact">
                    <h1>MASZ PYTANIA!<br/> NAPISZ DO MNIE</h1>
                    <div className="footer-contact-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Twoja wiadomość"
                                required
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className="button button-footer">
                                <button
                                    className="button-classic button-footer-classic"
                                    type="submit"
                                    disabled={state.submitting}
                                >
                                    WYŚLIJ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-background">
                    <img className="footer-image" src="/assets/footer.png" alt="background-footer"/>
                    <div className="footer-content">
                        <img className="footer-content-logo" src="/assets/logo.png" alt="Opis obrazka"/>
                        <div className="footer-content-menu">
                            <ul>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} passHref>
                                            <span className={`footer-menu-link${item.name === 'OFERTA' || item.name === 'GALERIA' ? ' blue-link' : ''}`}>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-content-contact">
                            {data.map((item) => {
                                if (item.name === "KONTAKT") {
                                    return (
                                        <Link className="footer-content-contact-h2" key={item.href} href={item.href}>{item.name}
                                        </Link>
                                    );
                                } return null;
                            })}
                            <div className="footer-content-contact-phone contact-info">
                                <FontAwesomeIcon icon={faPhone} />
                                <p>+48 795 103 108</p>
                            </div>
                            <div className="footer-content-contact-mail contact-info">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>animacje@nallipop.pl</p>
                            </div>
                            <div className="footer-content-contact-time contact-info">
                                <FontAwesomeIcon icon={faClock} />
                                <p>Codziennie od 10.00 do 20.00</p>
                            </div>
                        </div>
                        <div className="footer-content-media">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer