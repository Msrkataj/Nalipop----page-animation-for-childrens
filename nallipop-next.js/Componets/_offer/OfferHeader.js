import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";


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
                    {/*<img className="header-image-top" src="/assets/baner.png" alt="Opis obrazka" loading="lazy"/>*/}
                    <div className="header-top">
                        <div className="header-central-background header-central-background-offer"></div>
                        <img className="header-image" src="/assets/top.png" alt="top" />
                        <div className="header-top-content">
                            <Link href="/">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka" />
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header-central-image-container">
                            <img className="header-central-image header-central-image-offer" src="/assets/offer.png" alt="offer" />
                            <img className="header-central-clouds" src="/assets/clouds.png" alt="Opis obrazka" />
                        </div>
                    </div>
                    <div className="header-central">
                        <div className="header-text-offer">
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