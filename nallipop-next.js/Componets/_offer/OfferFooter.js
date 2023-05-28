import React from "react";
import {useForm, ValidationError} from '@formspree/react';
import Footer_section from "../hooks/footer_section";


const OfferFooter = () => {
    const [state, handleSubmit] = useForm("xoqzkkbn");

    if (state.succeeded) {
        return <p className="success-message">Dziękujemy za wysłanie wiadomości!</p>;
    }


    return (
        <>
            <div className="page">
            </div>
            <div className="container">
                <div className="footer footer-contact-top">
                    <div className="footer-backgroundBlue footer-backgroundBlue-offer"></div>
                    <div className="footer-contact">
                        <h1>MASZ PYTANIA ODNOŚNIE LOKALIZACJI?<br/> NAPISZ, POMOGĘ!</h1>
                        <div className="footer-contact-form">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Twoja wiadomość"
                                    required
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <div className="button button-footer">
                                    <button
                                        className="button-classic button-footer-classic"
                                        type="submit"
                                        disabled={state.submitting}
                                    >
                                        WYŚLIJ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer_section/>
                </div>
            </div>
        </>
    )
}

export default OfferFooter