import React, {useState, useEffect} from "react";
import Link from 'next/link';
import data from '../data/data.json';
import HeaderMenu from "../hooks/header-menu";
import Image from 'next/image';
import Head from 'next/head';

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
                <div className="header">
                    <div className="header__top">
                        <div className="header__top__background"></div>
                        <img className="header__top__image" src="/assets/top.webp" alt="top-image"/>
                        <div className="header__top__content">
                            <Link name="Nallipop - Animacje dla dzieci" href="/" >
                                    <img  className="header__top__content__logo"
                                          src="/assets/logo.webp"
                                          alt="Logo"/>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header__top__container">
                            <div>
                                <img className="header__top__container__image" src="/assets/home_header.webp" alt="home-image"/>
                            </div>
                            <div className="header__top__container__clouds"/>
                        </div>
                    </div>
                    <div className="header__central">
                        <div className="header__central__text">
                            <h1>ANIMACJE DLA DZIECI</h1>
                            <p>Animacje Nallipop - Warszawa i okolice<br/> dla rodziców, którzy chcą zapewnić dzieciom to co najlepsze</p>
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