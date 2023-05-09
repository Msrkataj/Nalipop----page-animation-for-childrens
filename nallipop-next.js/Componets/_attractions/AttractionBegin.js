import React from 'react';
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from '../data/data.json';


const AttractionsBegin = () => {
    const isVisible = useScrollAnimation('.attractions');

    return (
        <>
            <div className="page">
                {/*<div className="color-line color-line-attractions">*/}
                {/*    <img className="home-about_me-logo" src="/assets/line2.png" alt="Opis obrazka" />*/}
                {/*</div>*/}
                <div className="container">
                    <section className={`attractions${isVisible ? ' visible' : ''}`}>
                        <div className="attractions-content">
                            <div className="attractions-content-text">
                                Nasze animacje dla dzieci to nie tylko standardowe konkursy i gry, ale również wiele ciekawych i kreatywnych atrakcji! Każda z nich dostosowana jest do wieku i zainteresowań dzieci, dzięki czemu gwarantujemy świetną zabawę. Dodatkowo oferujemy również wiele dodatkowych aktywności.<br/> JESTEŚMY DLA WAS!                            </div>
                        </div>
                        <div className="button button-header button-attractions">
                            {data.map((item) => {
                                if (item.name === "FORMULARZ REZERWACJI") {
                                    return (
                                        <Link key={item.href} href={item.href} className="button-classic">FORMULARZ KONTAKTOWY
                                        </Link>
                                    );
                                } return null;
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AttractionsBegin;