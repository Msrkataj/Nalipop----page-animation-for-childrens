import React, {useState, useEffect} from "react";
import Link from 'next/link';
import TimePicker from 'react-time-picker';
import Select from "react-select";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, ValidationError } from '@formspree/react';
import data from '../data/data.json';


const attractionsOptions = [
    { value: "piniata", label: "Piniata" },
    { value: "banki_xxl", label: "Bańki XXL" },
    { value: "zamykanie_w_bance", label: "Zamykanie w bańce mydlanej" },
    { value: "malowanie_toreb", label: "Malowanie toreb" },
    { value: "facepainting", label: "Facepainting" },
    { value: "inne", label: "Inne (proszę napisać w uwagach)" },
];
const ReservationContent = () => {
    const [time, setTime] = useState(new Date());
    const [nameValid, setNameValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [selectedAttractions, setSelectedAttractions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [countChildren, setCountChildren] = useState(false);

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

    function handleAttractionsChange(event) {
        const selectedOptions = Array.from(event.target.selectedOptions).map(
            (option) => option.value
        );
        setSelectedAttractions(selectedOptions);
    }

    const [state, handleSubmitForm] = useForm("mzbqojvb");

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className="reservation">
                        {state.succeeded ?  (<p className="success-message-reservation">Dziękujemy za rezerwację, wkrótce otrzymasz potwierdzenie SMS :)</p>) : (
                            <form onSubmit={handleSubmitForm}>
                        <div className="reservation-personal_data">
                            <div className="reservation-data-form reservation-personal_data-form">
                                <h2 className="reservation-title reservation-personal_data-title">DANE<br/>OSOBOWE</h2>
                                <div className="form">
                                <h2>Imię i nazwisko</h2>
                                    <input
                                        type="text"
                                        name="Imię i nazwisko"
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
                                        name="Telefon"
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
                                        name="Email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        onChange={handleEmailChange}

                                    />
                                    {!emailValid && (
                                        <p className="error-message">Prosze wprowadzić poprawny email</p>
                                    )}
                                </div>
                            </div>
                            <div className="reservation-data-form reservation-about_party-form">
                                <h2 className="reservation-title reservation-about_party-title">O<br/>IMPREZIE</h2>
                                <div className="form">
                                <h2>Data imprezy</h2>
                                    <div className="custom-datepicker">
                                    <DatePicker
                                        name="Data imprezy"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                    />
                                    </div>
                                    <h2>Adres imprezy</h2>
                                    <input
                                        type="adress"
                                        name="Adres imprezy"
                                        id="adress"
                                        placeholder="Adres imprezy"
                                        required
                                    />
                                    <h2>Rodzaj imprezy</h2>
                                    <select name="Rodzaj imprezy" id="event-type" required>
                                        <option value="">Wybierz rodzaj imprezy</option>
                                        <option value="urodziny">Urodziny</option>
                                        <option value="chrzciny">Chrzest</option>
                                        <option value="wesele">Wesele</option>
                                        <option value="komunia">Komunia</option>
                                        <option value="uroczystość domowa">Uroczystość domowa</option>
                                        <option value="inne">Inne (proszę napisać w uwagach)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="reservation-data-form reservation-about_animations-form">
                                <div className="reservation-about_animations">
                                    <div className="reservation-about_animations-border">
                                        <div className="reservation-about_animations-background"></div>
                                    </div>
                                    <h2 className="reservation-title reservation-about_animations-title">O<br/>ANIMACJI
                                    </h2>
                                </div>
                                <div className="form">
                                <h2>Liczba dzieci</h2>
                                    <input
                                        type="number"
                                        name="Liczba dzieci"
                                        id="countChildren"
                                        placeholder="Licza dzieci"
                                        min="0"
                                        max="100"
                                        value={countChildren}
                                        onChange={e => setCountChildren(parseInt(e.target.value))}
                                        required
                                    />
                                    {countChildren >= 15 ? (
                                        <p>Powyżej 15 osób, wymagany jest dodatkowy animator</p>
                                    ) : null}
                                    <h2>Wiek dzieci</h2>
                                    <input
                                        type="number"
                                        name="Wiek min"
                                        id="age-min"
                                        placeholder="Wiek od"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="Wiek max"
                                        id="age-max"
                                        placeholder="Wiek do"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                    <h2>Liczba godzin</h2>
                                    <input
                                        type="number"
                                        name="Liczba godzin"
                                        id="hours"
                                        placeholder="Licza godzin"
                                        required
                                    />
                                    <h2>Orientacyjna godzinna rozpoczęcia:</h2>
                                    <TimePicker
                                        onChange={onChange}
                                        value={time}
                                        name="Orientacyjne godzinna"
                                        disableClock={true}
                                        isOpen={true}
                                    />
                                    <h2>Miejsce imprezy</h2>
                                    <select name="Miejsce imprezy"
                                            id="event-location"
                                            required>
                                        <option value="">Wybierz miejsce imprezy</option>
                                        <option value="dom">Dom</option>
                                        <option value="sala">Sala</option>
                                        <option value="plener">Plener</option>
                                        {/*<option value="komunia">Komunia</option>*/}
                                        {/*<option value="uroczystość domowa">Uroczystość domowa</option>*/}
                                        {/*<option value="inne">Inne (proszę napisać w uwagach)</option>*/}
                                    </select>
                                    <h2>Dodatkowo płatne atrakcje</h2>
                                    <Select
                                        isMulti
                                        placeholder={"Wybierz atrakcje"}
                                        name="Dodatkowo płatne atrakcje"
                                        options={attractionsOptions}
                                        onChange={(selectedOptions) => {
                                            setSelectedAttractions(selectedOptions.map((option) => option.value));
                                        }}
                                        value={selectedAttractions.map((value) =>
                                            attractionsOptions.find((option) => option.value === value)
                                        )}
                                        classNamePrefix="custom-select"
                                    />
                                    <h2>Uwagi</h2>
                                    <textarea
                                        name="Uwagi"
                                        id="comments"
                                        placeholder="Uwagi"
                                        required
                                        rows="1"
                                        style={{ overflow: "hidden", resize: "none" }}
                                        onChange={(e) => {
                                            e.target.style.height = "auto";
                                            e.target.style.height = e.target.scrollHeight + "px";
                                        }}
                                    />
                                    <ValidationError
                                        prefix="comments"
                                        field="comments"
                                        // errors={state.errors}
                                    />
                                    <div className="button button-reservation">
                                        <button className="button-classic button-footer-classic" type="submit" disabled={state.submitting}>
                                            WYŚLIJ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}

export default ReservationContent;