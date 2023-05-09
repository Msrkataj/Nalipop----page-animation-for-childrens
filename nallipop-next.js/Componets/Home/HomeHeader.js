import React, {useState, useEffect} from "react";
import Link from 'next/link';
import data from '../data/data.json';
import HeaderMenu from "../hooks/header-menu";

const HomeHeader = () => {
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
                    {/*<img className="header-image-top" src="/assets/baner.png" alt="Opis obrazka" loading="lazy"/>*/}
                    <div className="header-top">
                        <div className="header-central-background"></div>
                        <img className="header-image" src="/assets/top.png" alt="top"/>
                        <div className="header-top-content">
                            <Link href="/">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka"/>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header-central-image-container">
                            <img className="header-central-image" src="/assets/home_header.png" alt="Opis obrazka"/>
                            <div className="header-central-clouds"/>
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
                                }
                                return null;
                            })}
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

export default HomeHeader