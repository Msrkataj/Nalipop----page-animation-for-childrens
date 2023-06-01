import React from "react";
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import data from '../data/data.json';
import Image from "next/image";


const Footer_section = () => {


    return (
        <>
            <div className="footer-section">
                <div className="footer-section-background">
                    <Image
                        src="/assets/footer.png"
                        alt="background-footer"
                        layout='responsive'
                        width={3601}
                        height={3735}
                    />
                </div>
                <div className="footer-section-content">
                    <div className="footer-section-content-first">
                        <Link href="/">
                            <img className="footer-section-content-logo" src="/assets/logo.png" alt="logo"/>
                        </Link>
                        <div className="footer-section-content-menu">
                            <ul>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`footer-menu-link${item.name === 'OFERTA' || item.name === 'GALERIA' || item.name === 'FORMULARZ REZERWACJI' ? ' blue-link' : ''}`}
                                            href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section-content-second">
                        <div className="footer-section-content-contact">
                            <Link className="footer-section-content-contact-h2" href='terms'>REGULAMIN</Link>
                            <div className="footer-section-content-contact-phone contact-info">
                                <FontAwesomeIcon icon={faPhone}/>
                                <p>+48 795 103 108</p>
                            </div>
                            <div className="footer-section-content-contact-mail contact-info">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <p>animacje@nallipop.pl</p>
                            </div>
                        </div>
                       <div className="footer-section-content-media">
                            <h2>Media:</h2>
                            <div className="footer-section-content-media-content">
                                <Link href="https://www.facebook.com/profile.php?id=100090355616685" rel="noopener" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                                <Link href="/" rel="noopener" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer_section;