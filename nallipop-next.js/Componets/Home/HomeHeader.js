import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const HomeHeader = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

    const data = [
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



    return (
        <>
                <div className="container">
                    <div id="#" className="header">
                        {/*<img className="header-image-top" src="/assets/baner.png" alt="Opis obrazka" loading="lazy"/>*/}
                        <div className="header-top">
                            <div className="header-central-background"></div>
                            <img className="header-image" src="/assets/natalka_strona_góra_ bez_chmur.png" alt="Opis obrazka" />
                            <div className="header-top-content">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka" />
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
                                <img className="header-central-image" src="/assets/background-home.png" alt="Opis obrazka" />
                            </div>
                        </div>
                        <div className="header-central">
                            <div className="header-text">
                                <h1>ANIMACJE DLA DZIECI</h1>
                                <p>Animacje Nallipop - <br/> dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze</p>
                            </div>
                            <div className="button button-header">
                                {data.map((item) => {
                                    if (item.name === "OFERTA") {
                                        return (
                                            <Link key={item.href} href={item.href} className="button-classic">SPRAWDŹ!
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

export default HomeHeader