import React, { useState } from "react";
import Link from 'next/link';
import data from '../data/data.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

const HeaderMenu = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        document.body.classList.remove("no-scroll");
        setActive(false);
    };

    const toggleMenu = () => {
        setActive(!active);

        if (!active) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    return (
        <>
            <div onClick={toggleMenu}>
                <div className={active ? "activeHamburger" : "hamburger"} />
            </div>
            <div className="nav">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} passHref>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={active ? "activeSidenav " : "sidenav"}>
                <ul className="ul">
                    {data.map((item, index) => (
                        <li key={index} onClick={handleClick}>
                            <Link href={item.href} passHref className={index === 5 ? 'fifth-element' : ''}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/#opinions" passHref onClick={handleClick}>
                            OPINIE
                        </Link>
                    </li>
                </ul>
                <div className="nav-contact">
                    <div className="footer-section-content-contact nav-contact-content">
                        <div className="footer-section-content-contact-phone contact-info">
                            <FontAwesomeIcon icon={faPhone}/>
                            <p>+48 795 103 108</p>
                        </div>
                        <div className="footer-section-content-contact-mail contact-info">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>animacje@nallipop.pl</p>
                        </div>
                    </div>
                    <div className="footer-section-content-media nav-contact-media">
                        <div className="footer-section-content-media-content">
                            <a href="https://www.facebook.com/profile.php?id=100090355616685" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a href="https://www.instagram.com/animacje_nallipop/" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu;
