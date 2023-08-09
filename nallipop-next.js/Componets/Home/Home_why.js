import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const HomeWhy = () => {
    const isVisible = useScrollAnimation('.home_why');
    const isVisible1 = useScrollAnimation('.home_why_first');
    const isVisible2 = useScrollAnimation('.home_why_second');
    const isVisible3 = useScrollAnimation('.home_why_third');
    const isVisible4 = useScrollAnimation('.home_why_four');
    const isVisible5 = useScrollAnimation('.home_why_five');
    const isVisible6 = useScrollAnimation('.home_why_six');
    const isVisible7 = useScrollAnimation('.home_why_seven');

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className={`home_why${isVisible ? ' visible' : ''}`}>
                        <h2 className="animated-title">Dlaczego warto?</h2>

                        <p className="colored-text">Jesteśmy przekonani, że najbardziej cenione przez dzieci wspomnienia z dzieciństwa to te, które są pełne zabawy, radości i magicznego odkrywania świata. Nasza misja, jako doświadczonych animatorów dziecięcych, to stworzenie niezapomnianych chwil dla Twojego dziecka i jego przyjaciół. Zastanawiasz się, dlaczego warto zamówić nasze usługi animacji? Oto kilka ważnych powodów:</p>
                        <div className={`home_why_content home_why_first${isVisible1 ? ' visible' : ''}`}>
                            <h3 className="animated-title">1. Oferujemy różnorodne i kreatywne atrakcje.</h3>
                            <p className="colored-text">Malowanie twarzy, gry i zabawy ruchowe, balonowe figury, warsztaty plastyczne, magiczne pokazy – to tylko niektóre z atrakcji, które oferujemy. Każda z naszych animacji jest unikalna i dostosowana do wieku i zainteresowań dzieci. Nasi animatorzy są nie tylko ekspertami w swojej dziedzinie, ale są także szalenie kreatywni. Dzięki temu każda nasza impreza jest niepowtarzalna i zawsze dostarcza mnóstwo zabawy.</p>
                        </div>
                        <div className={`home_why_content home_why_second${isVisible2 ? ' visible' : ''}`}>
                            <h3 className="animated-title">2. Zapewniamy bezpieczeństwo i opiekę.</h3>
                            <p className="colored-text">Nasi animatorzy to doświadczeni profesjonaliści, którzy dbają o bezpieczeństwo i dobrą zabawę podczas każdej imprezy. Jesteśmy przeszkoleni, aby radzić sobie z różnymi sytuacjami i zapewniać dzieciom bezpieczną przestrzeń do zabawy. Dzięki temu rodzice mogą być spokojni o swoje pociechy, wiedząc, że są one pod odpowiednią opieką.</p>
                        </div>
                        <div className={`home_why_content home_why_third${isVisible3 ? ' visible' : ''}`}>
                            <h3 className="animated-title">3. Ułatwiamy organizację imprez.</h3>
                            <p className="colored-text">Planowanie i organizacja imprezy dla dzieci może być czasochłonne i stresujące. Z naszą pomocą, możesz skupić się na innych aspektach przygotowań, podczas gdy my zadbamy o animację. Dostarczamy wszystkie niezbędne materiały i sprzęt, a po zakończeniu imprezy sprzątamy miejsce zabawy. Dzięki nam, nie musisz martwić się o nic – wszystko jest pod kontrolą.</p>
                        </div>
                        <div className={`home_why_content home_why_four${isVisible4 ? ' visible' : ''}`}>
                            <h3 className="animated-title">4. Zapewniamy niezapomniane chwile.</h3>
                            <p className="colored-text">Dzieci uwielbiają nasze animacje, ponieważ dostarczamy im nie tylko świetnej zabawy, ale także niezapomnianych przeżyć. Przez nasze interaktywne gry i działania, dzieci mogą wyrazić swoją kreatywność, nauczyć się czegoś nowego i nawiązać nowe przyjaźnie. Zawsze staramy się, aby nasze imprezy były nie tylko rozrywką, ale także ciekawym doświadczeniem edukacyjnym.</p>
                        </div>
                        <div className={`home_why_content home_why_five${isVisible5 ? ' visible' : ''}`}>
                            <h3 className="animated-title">5. Dostosowujemy się do Twoich potrzeb.</h3>
                            <p className="colored-text">Rozumiemy, że każde dziecko i każda impreza są inne. Dlatego oferujemy szeroki wybór tematów i atrakcji, które możemy dostosować do Twoich indywidualnych potrzeb i oczekiwań. Bez względu na to, czy planujesz małe przyjęcie urodzinowe, czy duży event, jesteśmy gotowi dostarczyć najwyższej jakości usługi animacji.</p>
                        </div>
                        <div className={`home_why_content home_why_six${isVisible6 ? ' visible' : ''}`}>
                            <h3 className="animated-title">6. Nasi animatorzy to prawdziwi profesjonaliści.</h3>
                            <p className="colored-text">Nasi animatorzy to prawdziwi profesjonaliści, którzy kochają to, co robią. Każdy z nich to ekspert w swojej dziedzinie, z ogromnym doświadczeniem i nieograniczoną kreatywnością. Każdy z naszych animatorów jest także doskonałym pedagogiem, który potrafi znaleźć wspólny język z każdym dzieckiem.</p>
                        </div>
                          <div className={`home_why_content home_why_seven${isVisible7 ? ' visible' : ''}`}>
                              <h3 className="animated-title">7. Wysoka jakość naszych usług jest naszym priorytetem.</h3>
                              <p className="colored-text">Stawiamy na wysoką jakość naszych usług. Dzięki temu, jesteśmy pewni, że każda impreza z naszym udziałem będzie niezapomnianym wydarzeniem, które dzieci będą wspominać przez długie lata. Wszystko, co robimy, robimy z pasją i zaangażowaniem, co z pewnością widać w naszych animacjach.</p>
                          </div>
                        <p className="colored-text">Podsumowując, nasza profesjonalna usługa animacji to doskonały wybór dla każdej imprezy dla dzieci. Dzięki naszej kreatywności, doświadczeniu i zaangażowaniu, możemy przekształcić każdą okazję w magiczne i niezapomniane przeżycie. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych usługach i zarezerwować termin dla swojej imprezy!</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomeWhy;