import React from 'react';
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";


const AttractionsList = () => {
    const isVisible = useScrollAnimation('.attractions-list');
    return (
        <>
            <div className="page">
                <div className="container">
                    <h1 className="attractions-header">NASZE ATRAKCJE</h1>
                    <section className={`attractions-list${isVisible ? ' visible' : ''}`}>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                        <div className="attractions-list-content">
                            <img className="attractions-list-content-photo" src="" alt="" />
                            <h2>ATRAKCJA</h2>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AttractionsList;