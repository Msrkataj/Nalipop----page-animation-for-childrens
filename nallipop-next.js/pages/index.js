import HomeHeader from "../Componets/Home/HomeHeader";
import Home_first_step from "../Componets/Home/Home_first_step";
import Home_carousel_attractions from "../Componets/Home/Home_carousel_attractions"
import Home_carousel_opinions from "../Componets/Home/Home_carousel_opinions"
import HomeForm from "../Componets/Home/Home-form"
import Footer from "../Componets/Home/Footer";

export default function Home() {



    return (
        <>
            <HomeHeader/>
            <Home_first_step/>
            <Home_carousel_attractions/>
            <Home_carousel_opinions/>
            <HomeForm/>
            <Footer/>
        </>
    );
}

