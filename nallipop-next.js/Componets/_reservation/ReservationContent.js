import React, {useState, useEffect} from "react";
import Link from 'next/link';
import {ValidationError} from "@formspree/react";
import TimePicker from 'react-time-picker';

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
    const [time, setTime] = useState('10:00');

    const [nameValid, setNameValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    function onChange(value) {
        setTime(value);
    }
    function validateName(name) {
        return name.trim().split(" ").length >= 2;
    }

    function validatePhone(phone) {
        const re = /^\d+$/;
        return re.test(phone);
    }


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const handleNameChange = (event) => {
        setNameValid(validateName(event.target.value));
    };

    const handlePhoneChange = (event) => {
        setPhoneValid(validatePhone(event.target.value));
    };

    const handleEmailChange = (event) => {
        setEmailValid(validateEmail(event.target.value));
    };


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
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Imię i nazwisko"
                                        required
                                        onChange={handleNameChange}
                                    />
                                    {!nameValid && (
                                        <p className="error-message">Proszę wprowadzić imię i nazwisko</p>
                                    )}
                                    <h2>Telefon</h2>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        placeholder="Telefon"
                                        required
                                        onChange={handlePhoneChange}
                                    />
                                    {!phoneValid && (
                                        <p className="error-message">Prosze wprowadzić numer telefonu</p>
                                    )}
                                    <h2>Email</h2>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        onChange={handleEmailChange}

                                    />
                                    {!emailValid && (
                                        <p className="error-message">Prosze wprowadzić poprawny email</p>
                                    )}
                                </form>
                            </div>
                            <div className="reservation-data-form reservation-about_party-form">
                                <h2 className="reservation-title reservation-about_party-title">O<br/>IMPREZIE</h2>
                                <form>
                                    <h2>Data imprezy</h2>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        id="eventDate"
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
                                    <select name="event-type" id="event-type" required>
                                        <option value="">Wybierz rodzaj imprezy</option>
                                        <option value="urodziny">Urodziny</option>
                                        <option value="chrzciny">Chrzest</option>
                                        <option value="wesele">Wesele</option>
                                        <option value="komunia">Komunia</option>
                                        <option value="uroczystość domowa">Uroczystość domowa</option>
                                        <option value="inne">Inne (proszę napisać w uwagach)</option>
                                    </select>
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
                                    <h2 className="reservation-title reservation-about_animations-title">O<br/>ANIMACJI
                                    </h2>
                                </div>
                                <form>
                                    <h2>Liczba dzieci</h2>
                                    <input
                                        type="number"
                                        name="countChildren"
                                        id="countChildren"
                                        placeholder="Licza dzieci"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                    <h2>Wiek dzieci</h2>
                                    <input
                                        type="number"
                                        name="age-min"
                                        id="age-min"
                                        placeholder="Wiek od"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="age-max"
                                        id="age-max"
                                        placeholder="Wiek do"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                    <ValidationError
                                        prefix="age"
                                        field="age"
                                        // errors={state.errors}
                                    />
                                    <h2>Liczba godzin</h2>
                                    <input
                                        type="number"
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
                                    <h2>Orientacyjne godzinna</h2>
                                    <TimePicker
                                        disableClock
                                        format="HH:mm"
                                        onChange={onChange}
                                        value={time}
                                    />
                                    <ValidationError
                                        prefix="clock"
                                        field="clock"
                                        // errors={state.errors}
                                    />
                                    <h2>Miejsce imprezy</h2>
                                    <select name="event-location" id="event-location" required>
                                        <option value="">Wybierz miejsce imprezy</option>
                                        <option value="dom">Dom</option>
                                        <option value="sala">Sala</option>
                                        <option value="plener">Plener</option>
                                        {/*<option value="komunia">Komunia</option>*/}
                                        {/*<option value="uroczystość domowa">Uroczystość domowa</option>*/}
                                        {/*<option value="inne">Inne (proszę napisać w uwagach)</option>*/}
                                    </select>
                                    <h2>Dodatkowo płatne atrakcje</h2>
                                    <select name="event-location" id="event-location" multiple required>
                                        <option value="piniata">Piniata</option>
                                        <option value="banki_xxl">Bańki XXL</option>
                                        <option value="zamykanie_w_bance">Zamykanie w bańce mydlanej</option>
                                        <option value="malowanie_toreb">Malowanie toreb</option>
                                        <option value="facepainting">Facepainting</option>
                                        <option value="inne">Inne (proszę napisać w uwagach)</option>
                                    </select>
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