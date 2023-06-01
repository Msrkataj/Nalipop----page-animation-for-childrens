import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";
import Image from "next/image";


const HomeHeader = () => {
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
                <div id="#" className="header">
                    <div className="header__top">
                        <div className="header__top__background header__top__background__offer"></div>
                        <img className="header__top__image" src="/assets/top.png" alt="top" />
                        <div className="header__top__content">
                            <Link href="/">
                                <div className="header__top__content__logo">
                                    <Image
                                        className="header__top__content__logo"
                                        src="/assets/logo.png"
                                        alt="Logo"
                                        layout='responsive'
                                        width={1240}
                                        height={1240}
                                    />
                                </div>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header__top__container">
                            <div className="header__top__container__image header__top__container__offer__image">
                                <Image
                                    src='/assets/offer.png'
                                    alt="offer"
                                    layout='responsive'
                                    width={1324}
                                    height={1324}
                                    quality={100}
                                />
                            </div>
                            <div className="header__top__container__clouds" />
                        </div>
                    </div>
                    <div className="header__central">
                        <div className="header__central__offer__text">
                            <h1>OFERTA</h1>
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