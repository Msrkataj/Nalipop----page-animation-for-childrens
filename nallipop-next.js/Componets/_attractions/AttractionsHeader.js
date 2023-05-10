import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"
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
                        <div className="header-central-background header-central-background-attractions"></div>
                        <img className="header-image" src="/assets/top.png" alt="top"/>
                        <div className="header-top-content">
                            <Link href="/">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka"/>
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header-central-image-container">
                            <img className="header-central-image header-central-image-attractions"
                                 src="/assets/attractions_header.png" alt="attractions"/>
                            <div className="header-central-clouds header-central-clouds-attractions"/>
                        </div>
                    </div>
                    <div className="header-central header-central-attractions">
                        <div className="header-text-attractions">
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