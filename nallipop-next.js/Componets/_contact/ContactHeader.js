import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const ContactHeader = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

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

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div id="#" className="header">
                    <div className="header-top">
                        <div className="header-central-background header-central-background-contact"></div>
                        <img className="header-image" src="/assets/top.png" alt="top" />
                        <div className="header-top-content">
                            <Link href="/">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka" />
                            </Link>
                            <div className="menu">
                            </div>
                            <div onClick={() => setActive(!active)}>
                                <div className={active ? "activeHamburger" : "hamburger"}/>
                            </div>
                            <div className="nav">
                                <ul style={{ display: close ? 'none' : null }}>
                                    <ul>
                                        {data.slice(0, -1).map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} passHref>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                                <ul style={{ display: !close ? 'none' : null }}>
                                </ul>
                            </div>
                            <div className={active ? "activeSidenav " : "sidenav"}>
                                <ul className="ul" style={{display: close ? "none" : null}}>
                                    {data.slice(0, -1).map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} passHref>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="header-central-image-container">
                            <img className="header-central-image header-central-image-contact" src="/assets/contact.png" alt="contact.png" />
                            <img className="header-central-clouds" src="/assets/clouds.png" alt="Opis obrazka" />
                        </div>
                    </div>
                    <div className="header-central">
                        <div className="header-text-contact">
                            <h1>KONTAKT</h1>
                        </div>
                    </div>
                </div>
                <button
                    id="back-to-top"
                    className={`back-to-top-button${visible ? ' visible' : ''}`}
                    onClick={scrollToTop}
                >&#x25B2;
                </button>
            </div>
        </>
    )
}

export default ContactHeader