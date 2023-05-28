import React from 'react';
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const AboutMeSection = () => {
    const isVisible = useScrollAnimation('.about_me');

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className={`about_me${isVisible ? ' visible' : ''}`}>
                        <h1>Natalia Marciniak</h1>
                        <div className="about_me-content">
                            <div className="about_me-content-text">
                                <p><b>Cześć! Jestem Natalia, animatorka dziecięca, która przyniesie do twojego wydarzenia mnóstwo energii, kreatywności i radości!</b> <br/>
                                    Moje doświadczenie jako pedagog specjalny, magister terapii pedagogicznej, oraz terapeuta dodatkowo wzbogaca moje podejście do pracy z dziećmi,
                                    sprawiając, że każde z nich czuje się wyjątkowo.
                                    Jestem absolwentką Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej.
                                    Tam zdobyłam licencjat z Pedagogiki Specjalnej - wczesne wspomaganie rozwoju dzieci oraz <b>magisterium z Pedagogiki Specjalnej-Terapia Pedagogiczna</b>, co pozwoliło mi na pogłębienie mojej wiedzy o rozwoju i potrzebach dzieci.
                                    Długoletnie doświadczenie w pracy z dziećmi, zarówno w przedszkolu, jak i w szkole, pozwoliło mi na zdobycie praktycznych umiejętności.Ale to moja pasja do animacji naprawdę przynosi kolor i życie do każdego wydarzenia!
                                    <br/><b>Ukończyłam specjalistyczne szkolenia z animacji i facepaintingu.</b> Dodatkowo, moje animacje ruchowe, które łączą moją miłość do sportu z zabawą, to prawdziwy hit wśród dzieci.
                                    Prowadzę animacje na różnego rodzaju imprezach - urodzinach, weselach, komuniach.
                                    Każda z nich to niepowtarzalna przygoda, która nie tylko bawi, ale także pomaga dzieciom rozwijać umiejętności społeczne, kreatywność i samodzielność.Jeśli planujesz wydarzenie i szukasz niezapomnianych atrakcji dla dzieci, nie wahaj się i skontaktuj ze mną!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutMeSection;