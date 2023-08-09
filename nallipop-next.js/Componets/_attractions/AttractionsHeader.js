import React, {useState, useEffect} from "react";
import Link from 'next/link';
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
                <div className="header">
                    <div className="header__top">
                        <div className="header__top__background header__top__background__attractions"></div>
                        <img className="header__top__image" src="/assets/top.webp" alt="top-image"/>
                        <div className="header__top__content">
                            <Link href="/">
                                <img  className="header__top__content__logo"
                                      src="/assets/logo.webp"
                                      alt="Logo"/>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header__top__container">
                            <img className="header__top__container__image header__top__container__attractions__image"
                                 src="/assets/attractions_header.webp" alt="attractions"/>
                            <div className="header__top__container__clouds header-central-clouds-attractions"/>
                        </div>
                    </div>
                    <div className="header__central">
                        <div className="header__central__attractions__text">
                            <h1>ATRAKCJE</h1>
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