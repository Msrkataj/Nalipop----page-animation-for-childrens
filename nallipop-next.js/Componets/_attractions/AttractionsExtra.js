import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import storage from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import data from '../data/data.json';


const AttractionsExtra = () => {

    const isVisible = useScrollAnimation('.atr-extra-content');
    const isVisible2 = useScrollAnimation('.atr-extra-content-second');
    const isVisible3 = useScrollAnimation('.atr-extra-content-three');
    const isVisible4 = useScrollAnimation('.atr-extra-content-four');
    const isVisible5 = useScrollAnimation('.atr-extra-content-five');
    const isVisible6 = useScrollAnimation('.atr-extra-content-end');

    const [imageUrls, setImageUrls] = useState({
        facepainting: "",
        bankaBig: "",
        banki: "",
        piniataCreep: "",
        slime: "",
    });

    useEffect(() => {
        const fetchImageUrls = async () => {
            const facepaintingUrl = await getDownloadURL(ref(storage, 'extraAttractions/facepainting.png'));
            const bankaBigUrl = await getDownloadURL(ref(storage, 'extraAttractions/banka-big.png'));
            const bankiUrl = await getDownloadURL(ref(storage, 'extraAttractions/banki.png'));
            const piniataCreepUrl = await getDownloadURL(ref(storage, 'extraAttractions/piniata-creep.png'));
            const slimeUrl = await getDownloadURL(ref(storage, 'extraAttractions/slime.png'));

            setImageUrls({
                facepainting: facepaintingUrl,
                bankaBig: bankaBigUrl,
                banki: bankiUrl,
                piniataCreep: piniataCreepUrl,
                slime: slimeUrl,
            });
        };

        fetchImageUrls();
    }, []);

    return (
        <>
            <div className="page">
                <div className="container">
                    <h1 className="atr-extra-header">ATRAKCJE DODATKOWE</h1>
                    <section className="atr-extra">
                        <div className={`atr-extra-content${isVisible ? ' visible' : ''}`}>
                            <div className="atr-extra-content-text atr-extra-content-text-piniata">
                                <h2>Rozbijanie piniaty</h2>
                                <p>To świetna zabawa dla wszystkich, niezależnie od wieku. Wymyśl swoją ulubioną pinatę, my ją przygotujemy na imprezę, a dzieci będą mogli ją zniszczyć i zobaczyć, jak wypełniające ją słodycze i niespodzianki wylatują na wszystkie strony, dając Im prawdziwe poczucie spełnienia.</p>
                            </div>
                            <div className="atr-extra-content-others">
                                <img className="atr-extra-content-photo" src={imageUrls.piniataCreep} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-piniata">
                                    od 150 zł
                                </div>
                            </div>
                        </div>
                        <div className={`atr-extra-content atr-extra-content-second${isVisible2 ? ' visible' : ''}`}>
                            <div className="atr-extra-content-background"></div>
                            <div className="atr-extra-content-text">
                                <h2>Malowanie twarzy - Face Painting</h2>
                                <p>Malowanie Twarzy to klasyczna atrakcja, która zawsze cieszy dzieci i dorosłych. Używam bezpiecznych i nietoksycznych farb do malowania twarzy, dzięki czemu możesz mieć pewność, że Twoje dziecko będzie bezpieczne i zadowolone z efektu końcowego. Wybierz z naszej szerokiej gamy wzorów, od motywów zwierzęcych po postacie z bajek i filmów, a stworzę wspaniałe dzieło sztuki na twarzy Twojego dziecka. Malowanie twarzy to idealny dodatek do każdej imprezy dla dzieci, który dostarczy niezapomnianych chwil zabawy i radości.</p>
                            </div>
                            <div className="atr-extra-content-others atr-extra-content-others-reverse">
                                <img className="atr-extra-content-photo atr-extra-content-photo-face" src={imageUrls.facepainting} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-face">
                                    + 100 zł <br/>
                                </div>
                            </div>
                        </div>
                        <div className={`atr-extra-content atr-extra-content-three${isVisible3 ? ' visible' : ''}`}>
                            <div className="atr-extra-content-text">
                                <h2>Bańki mydlane XXL</h2>
                                <p>Nasze bańki mydlane mają ogromne rozmiary, dzięki czemu mogą być podziwiane przez dzieci z daleka, a jednocześnie dają im szansę, by wskoczyć do środka i poczuć się jak w magicznym świecie bańkowej fantazji. Wykorzystuje sprawdzonej jakości płyń, aby zapewnić imponujące efekty i stworzyć magiczną atmosferę. Dzieci będą zachwycone widząc, jak bańki mydlane unoszą się w powietrzu, a także będą miały okazję do interakcji z nimi, próbując złapać je w locie. Bańki Mydlane XXL to idealna atrakcja dla każdej imprezy dla dzieci, która zapewni wiele radości i zabawy.</p>
                            </div>
                            <div className="atr-extra-content-others">
                                <img className="atr-extra-content-photo atr-extra-content-photo-soapbox" src={imageUrls.bankaBig} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-soapbox">
                                    + 80 zł
                                </div>
                            </div>
                        </div>
                        <div className={`atr-extra-content atr-extra-content-second atr-extra-content-four${isVisible4 ? ' visible' : ''}`}>
                            <div className="atr-extra-content-background atr-extra-content-background2"></div>
                            <div className="atr-extra-content-text">
                                <h2>Zamykanie w bańce mydlanej</h2>
                                <p>Chcesz zaskoczyć swoje dziecko lub jego małych gości niesamowitą atrakcją? Zamów a pokaże dzieciom, jak zamykać się w bańce mydlanej! To niezwykłe widowiskowa atrakcja, która zapewni maluchom świetną zabawę i wiele niezapomnianych chwil.</p>
                            </div>
                            <div className="atr-extra-content-others atr-extra-content-others-reverse">
                                <img className="atr-extra-content-photo atr-extra-content-photo-closeSoapbox" src={imageUrls.banki} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-closeSoapbox">
                                    + 150 zł
                                </div>
                            </div>
                        </div>
                        <div className={`atr-extra-content atr-extra-content-five${isVisible5 ? ' visible' : ''}`}>
                            <div className="atr-extra-content-text">
                                <h2>Slime</h2>
                                <p>Dzieci będą miały okazję stworzyć swoje własne, kolorowe slime'y, które będą mogły zabrać do domu. To idealna zabawa dla małych odkrywców, którzy lubią eksperymentować z różnymi materiałami i kolorami. Wszystkie potrzebne materiały, w tym klej, płyn kontaktowy i barwniki, są dostarczane przez nas. Warsztaty slime to nie tylko zabawa, ale również edukacja. Dzieci uczą się na przykład o reakcjach chemicznych i mieszaniu różnych składników.</p>
                            </div>
                            <div className="atr-extra-content-others">
                                <img className="atr-extra-content-photo atr-extra-content-photo-slime" src={imageUrls.slime} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-slime">
                                    + 100 zł
                                </div>
                            </div>
                        </div>
                        <div className={`atr-extra-content atr-extra-content-second atr-extra-content-end${isVisible6 ? ' visible' : ''}`}>
                            <div className="atr-extra-content-background atr-extra-content-background3"></div>
                            <div className="atr-extra-content-text">
                                <h2>Malowanie toreb</h2>
                                <p>To świetna zabawa dla wszystkich, niezależnie od wieku. Wymyśl swoją ulubioną piniatę, my ją przygotujemy na imprezę, a dzieci będą mogli ją zniszczyć i zobaczyć, jak wypełniające ją słodycze i niespodzianki wylatują na wszystkie strony, dając Im prawdziwe poczucie spełnienia.</p>
                            </div>
                            <div className="atr-extra-content-others atr-extra-content-others-reverse">
                                <img className="atr-extra-content-photo atr-extra-content-photo-bag" src={imageUrls.piniataCreep} alt="piniata-creep" />
                                <div className="atr-extra-content-price atr-extra-content-price-bag">
                                    + 150 zł
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AttractionsExtra;