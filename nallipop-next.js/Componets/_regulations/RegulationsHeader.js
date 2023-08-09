import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";
import Image from "next/image";


const RegulationsHeader = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
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
                <div className="header regulations-header">
                    <div className="header__top">
                        <div className="header__top__background header__top__background__regulations"></div>
                        <img className="header__top__image" src="/assets/top.webp" alt="top" />
                        <div className="header__top__content">
                            <Link href="/">
                                <img  className="header__top__content__logo"
                                      src="/assets/logo.webp"
                                      alt="Logo"/>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header__top__container">
                            <img className="header__top__container__clouds" src="/assets/clouds.webp" alt="Opis obrazka" />
                        </div>
                    </div>
                    <div className="header__central header__central__regulations">
                        <div className="header__central__regulations__text">
                            <h1>REGULAMIN</h1>
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

export default RegulationsHeader