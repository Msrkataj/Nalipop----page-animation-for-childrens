import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";
import Image from "next/image";


const GalleryHeader = () => {
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
                        <div className="header__top__background header__top__background__gallery"></div>
                        <Image
                            className="header__top__image"
                            src="/assets/top.png"
                            alt="top"
                            layout='responsive'
                            width={1920}
                            height={1080}
                        />
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
                            <img className="header__top__container__image header__top__container__gallery__image" src="/assets/gallery_header.png" alt="gallery.png" />
                            <div className="header__top__container__clouds" />
                        </div>
                    </div>
                    <div className="header__central">
                        <div className="header__central__text__gallery">
                            <h1>GALERIA</h1>
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

export default GalleryHeader