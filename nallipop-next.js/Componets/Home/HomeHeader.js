import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const HomeHeader = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

    const data = [
        {
            name: 'Start',
            href: '#',
        },
        {
            name: 'O co chodzi?',
            href: 'Why',
        },
        {
            name: 'O nas',
            href: 'team',
        },
        {
            name: 'Fundacja i organizacje',
            href: 'events',
        },
        {
            name: 'Kontakt',
            href: 'contact',
        },
    ];



    return (
        <>
            <div className="page">
                <div className="container">
                    <div id="#" className="header">
                        <div className="header-top">
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
                                            {data.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href} passHref>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </ul>
                                    <ul style={{ display: !close ? 'none' : null }}>
                                        {/*<Link href="../" passHref>*/}
                                        {/*    <a className="scroll">Home</a>*/}
                                        {/*</Link>*/}
                                    </ul>
                                </div>
                                <div className={active ? "activeSidenav " : "sidenav"}>
                                    <ul className="ul" style={{display: close ? "none" : null}}>
                                        {data.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} passHref>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {/*<ul className="home-mobile" style={{display: !close ? "none" : null}}>*/}
                                    {/*    <Link href="../">*/}
                                    {/*        Home*/}
                                    {/*    </Link>*/}
                                    {/*</ul>*/}
                                </div>
                            </div>
                            <div className="header-central-image-container">
                                <div className="header-central-background"></div>
                                <img className="header-central-image" src="/assets/background-home.png" alt="Opis obrazka" />
                            </div>
                        </div>
                        <div className="header-central">
                            <div className="header-text">
                                <h1>ANIMACJE DLA DZIECI</h1>
                                <p>Animacje Nallipop - <br/> dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze</p>
                            </div>
                            <div className="header-bottom">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default HomeHeader