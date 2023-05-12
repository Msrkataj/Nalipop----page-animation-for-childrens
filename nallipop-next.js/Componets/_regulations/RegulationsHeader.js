import React, {useState, useEffect} from "react";
import Link from 'next/link';
import HeaderMenu from "../hooks/header-menu";


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
                <div id="#" className="header regulations-header">
                    <div className="header-top">
                        <div className="header-central-background header-central-background-regulations"></div>
                        <img className="header-image" src="/assets/top.png" alt="top" />
                        <div className="header-top-content">
                            <Link href="/">
                                <img className="header-logo" src="/assets/logo.png" alt="Opis obrazka" />
                            </Link>
                            <HeaderMenu/>
                        </div>
                        <div className="header-central-image-container">
                            <img className="header-central-clouds" src="/assets/clouds.png" alt="Opis obrazka" />
                        </div>
                    </div>
                    <div className="header-central header-central-regulations">
                        <div className="header-text-regulations">
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