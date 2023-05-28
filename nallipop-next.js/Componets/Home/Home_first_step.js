import React from "react";
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import Home_news from "../hooks/home-news";
import Image from "next/image";

const HomeFirstStep = () => {
    const isVisible = useScrollAnimation('.home-about_me');

    return (

        <>
            <div className="page">
                    <div className="color-line">
                        <div/></div>
                <div className="container">
                     <div className={`home-about_me${isVisible ? ' visible' : ''}`}>
                         <div className="home-about_me-background">
                         </div>
                         <div className="home-about_me-content">
                             <img className="home-about_me-content-logo" src="/assets/logo-black.png" alt="Opis obrazka" />
                             <p><b> Zapraszamy do wspaniałego świata Nallipop! </b><br/>
                             Zajmujemy się tworzeniem animacji dla dzieci, które nie tylko bawią, ale także edukują.
                                 Za naszymi produkcjami stoi doświadczona animatorka, która posiada wykształcenie pedagogiczne oraz prowadzi terapię jako pedagog specjalny.
                                 Dzięki temu nasze animacje są nie tylko interesujące i wciągające, ale także dostosowane do potrzeb najmłodszych.
                                 Dodatkowo, animacje Nallipop są tak stworzone, aby wspierać rozwój dziecka w różnych obszarach,
                                 takich jak spostrzegawczość, koncentracja czy rozwój emocjonalny.
                                 Jeśli chcesz zapewnić swojemu dziecku świetną zabawę i jednocześnie edukację, wybierz animacje Nallipop!
                             </p>
                         </div>
                         <div className="home-about_me-content-movie">
                             <video className="home-header-video" autoPlay loop muted>
                                 <source src="/assets/piniata.mp4" type="video/mp4" />
                             </video>
                             <img className="home-about_me-content-movie-image" src="/assets/wstazka.png" alt="wstazka" />
                         </div>
                     </div>
                    <Home_news/>
                </div>
                <div className="home-back">
                    <div className="home-back-overlay"></div>
                    <div className="home-back-hands">
                        <Image
                            src="/assets/home-hands.jpg"
                            alt="Children-hands"
                            layout='responsive'
                            width={5616}
                            height={3744}
                        />
                    </div>
                    <div className="home-back-title">
                        <h2>Niesamowite przygody pełne emocji i uśmiechu!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFirstStep