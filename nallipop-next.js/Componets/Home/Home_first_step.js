import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"


const HomeFirstStep = ({close}) => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({});

    const data = [
        {
            name: 'Start',
            href: '#',
        },
        {
            name: 'O MNIE',
            href: 'me',
        },
        {
            name: 'OFERTA',
            href: 'offer',
        },
        {
            name: 'ATRAKCJE',
            href: 'attractions',
        },
        {
            name: 'KONTAKT',
            href: 'contact',
        },
    ];



    return (
        <>
            <div className="page">
                <div className="color-line">

                </div>
                <div className="container">
                     <div className="home-about_me">
                         <div className="home-about-me-background">
                         </div>
                         <div className="home-about_me-content">
                             <img className="home-about_me-logo" src="/assets/logo.png" alt="Opis obrazka" />
                             <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque magnam molestias nemo perspiciatis ratione, sint voluptate? Assumenda commodi ducimus esse et laborum pariatur sint unde? Facere illum laboriosam magni quod.</span><span>Aperiam consequatur, excepturi modi officia quis reprehenderit veritatis! Architecto at culpa cupiditate dicta ea, et expedita fugit maxime necessitatibus nesciunt officiis omnis perferendis possimus quaerat quas, quibusdam repellendus repudiandae vitae!</span></p>
                         <div className="home-about_me-content-movie">
                             <video className="home-header-video" loop muted>
                                 <source src="/assets/piniata.mp4" type="video/mp4" />
                             </video>
                             <img className="home-header-image" src="/assets/wstazka.png" alt="wstazka" />
                         </div>
                         </div>
                     </div>
                    <div className="home-back">
                        <div className="home-back-overlay"></div>
                        <img className="home-word-hands" src="/assets/home-hands.jpg" alt="Children-hands" />
                        <div className="home-word-title">
                            <h2>ZAJEBISTA ZABAWA<br/>DO ZAPAMIĘTANIA NA CAŁE ŻYCIE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFirstStep