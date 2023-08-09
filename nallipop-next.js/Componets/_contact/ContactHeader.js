import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";
import Image from "next/image";


const ContactHeader = ({close}) => {
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
                        <div className="header__top__background header__top__background__contact"></div>
                        <img className="header__top__image" src="/assets/top.webp" alt="top-image"/>
                        {/*<Image*/}
                        {/*    className="header__top__image"*/}
                        {/*    src="/assets/top.webp"*/}
                        {/*    alt="top-image"*/}
                        {/*    layout='responsive'*/}
                        {/*    width={1920}*/}
                        {/*    height={1080}*/}
                        {/*/>*/}
                        <div className="header__top__content">
                            <Link href="/">
                                {/*<div className="header__top__content__logo">*/}
                                <img  className="header__top__content__logo"
                                      src="/assets/logo.webp"
                                      alt="Logo"/>
                                {/*<Image*/}
                                {/*    className="header__top__content__logo"*/}
                                {/*    src="/assets/logo.webp"*/}
                                {/*    alt="Logo"*/}
                                {/*    layout='responsive'*/}
                                {/*    width={1240}*/}
                                {/*    height={1240}*/}
                                {/*/>*/}
                                {/*</div>*/}
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header__top__container">
                            <img className="header__top__container__image header__top__container__contact__image" src="/assets/contact_header.webp" alt="contact-image" />
                            <div className="header__top__container__clouds"/>
                        </div>
                    </div>
                    <div className="header__central">
                        <div className="header__central__contact__text">
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