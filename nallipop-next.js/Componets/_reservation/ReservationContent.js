import React from 'react';
import Link from 'next/link';
import {ValidationError} from "@formspree/react";

const data = [
    {
        name: 'O MNIE',
        href: '/me',
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
        name: 'GALERIA',
        href: 'gallery',
    },
    {
        name: 'KONTAKT',
        href: 'contact',
    },
    {
        name: 'FORMULARZ',
        href: 'form',
    },
];

const ReservationContent = () => {
    return (
        <>
            <div className="page">
                <div className="container">
                    <section className="reservation">
                        <div className="reservation-personal_data">
                            <div className="reservation-data-form reservation-personal_data-form">
                            <h2 className="reservation-title reservation-personal_data-title">DANE<br/>OSOBOWE</h2>
                                <form>
                                    <h2>Imię i nazwisko</h2>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Imię i nazwisko"
                                        required
                                    />
                                    <ValidationError
                                        prefix="name"
                                        field="name"
                                        // errors={state.errors}
                                    />
                                    <h2>Telefon</h2>
                                    <input
                                        type="phone"
                                        name="phone"
                                        id="phone"
                                        placeholder="Telefon"
                                        required
                                    />
                                    <ValidationError
                                        prefix="phone"
                                        field="phone"
                                        // errors={state.errors}
                                    />
                                    <h2>Email</h2>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <ValidationError
                                        prefix="email"
                                        field="email"
                                        // errors={state.errors}
                                    />
                                </form>
                            </div>
                            <div className="reservation-data-form reservation-about_party-form">
                                <h2 className="reservation-title reservation-about_party-title">O<br/>IMPREZIE</h2>
                                <form>
                                    <h2>Data imprezy</h2>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="dd.mm.rrrr"
                                        required
                                    />
                                    <ValidationError
                                        prefix="name"
                                        field="name"
                                        // errors={state.errors}
                                    />
                                    <h2>Adres imprezy</h2>
                                    <input
                                        type="adress"
                                        name="adress"
                                        id="adress"
                                        placeholder="Adres imprezy"
                                        required
                                    />
                                    <ValidationError
                                        prefix="adress"
                                        field="adress"
                                        // errors={state.errors}
                                    />
                                    <h2>Rodzaj imprezy</h2>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Rodzaj imprezy"
                                        required
                                    />
                                    <ValidationError
                                        prefix="email"
                                        field="email"
                                        // errors={state.errors}
                                    />
                                </form>
                            </div>
                            <div className="reservation-data-form reservation-about_animations-form">
                            <div className="reservation-about_animations">
                                <div className="reservation-about_animations-border">
                                    <div className="reservation-about_animations-background"></div>
                                </div>
                                <h2 className="reservation-title reservation-about_animations-title">O<br/>ANIMACJI</h2>
                            </div>
                                <form>
                                    <h2>Liczba dzieci</h2>
                                    <input
                                        type="countChildren"
                                        name="countChildren"
                                        id="countChildren"
                                        placeholder="Licza dzieci"
                                        required
                                    />
                                    <ValidationError
                                        prefix="countChildren"
                                        field="countChildren"
                                        // errors={state.errors}
                                    />
                                    <h2>Wiek dzieci</h2>
                                    <input
                                        type="age"
                                        name="age"
                                        id="age"
                                        placeholder="Wiek dzieci"
                                        required
                                    />
                                    <ValidationError
                                        prefix="age"
                                        field="age"
                                        // errors={state.errors}
                                    />
                                    <h2>Liczba godzin</h2>
                                    <input
                                        type="hours"
                                        name="hours"
                                        id="hours"
                                        placeholder="Licza godzin"
                                        required
                                    />
                                    <ValidationError
                                        prefix="hours"
                                        field="hours"
                                        // errors={state.errors}
                                    />
                                    <h2>Dokładne godzinny</h2>
                                    <input
                                        type="clock"
                                        name="clock"
                                        id="clock"
                                        placeholder="Dokładne godzinny"
                                        required
                                    />
                                    <ValidationError
                                        prefix="clock"
                                        field="clock"
                                        // errors={state.errors}
                                    />
                                    <h2>Rodzaj imprezy</h2>
                                    <input
                                        type="aboutParty"
                                        name="aboutParty"
                                        id="aboutParty"
                                        placeholder="Rodzaj imprezy"
                                        required
                                    />
                                    <ValidationError
                                        prefix="aboutParty"
                                        field="aboutParty"
                                        // errors={state.errors}
                                    />
                                    <h2>Miejsce imprezy</h2>
                                    <input
                                        type="location"
                                        name="location"
                                        id="location"
                                        placeholder="Miejsce imprezy"
                                        required
                                    />
                                    <ValidationError
                                        prefix="location"
                                        field="location"
                                        // errors={state.errors}
                                    />
                                    <h2>Dodatkowo płatne atrakcje</h2>
                                    <input
                                        type="extraAttractions"
                                        name="extraAttractions"
                                        id="extraAttractions"
                                        placeholder="Dodatkowo płatne atrakcje"
                                        required
                                    />
                                    <ValidationError
                                        prefix="extraAttractions"
                                        field="extraAttractions"
                                        // errors={state.errors}
                                    />
                                    <h2>Uwagi</h2>
                                    <input
                                        type="comments"
                                        name="comments"
                                        id="comments"
                                        placeholder="Uwagi"
                                        required
                                    />
                                    <ValidationError
                                        prefix="comments"
                                        field="comments"
                                        // errors={state.errors}
                                    />
                                    <div className="button button-reservation">
                                        <button
                                            className="button-classic button-footer-classic"
                                            type="submit"
                                            // disabled={state.submitting}
                                        >
                                            WYŚLIJ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ReservationContent;