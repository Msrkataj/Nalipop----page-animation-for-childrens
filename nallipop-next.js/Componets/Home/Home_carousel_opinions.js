import React, {useState, useEffect} from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import storage from "../../firebase";
import { getDownloadURL, listAll, ref} from "firebase/storage";
import Image from "next/image";
import Own_opinions from "../hooks/own-opinions";

const HomeCarouselOpinions = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, "opinions");

        listAll(storageRef)
            .then((res) => {
                const promises = res.items.map((itemRef) =>
                    getDownloadURL(itemRef).then((url) => ({
                        name: itemRef.name,
                        href: url,
                        description: itemRef.name,
                    }))
                );
                return Promise.all(promises);
            })
            .then((carouselItems) => setImages(carouselItems))
            .catch((error) => console.error("Error listing images:", error));
    }, []);

    return (
        <>
            <div className="page">
                <h1 className="opinion-title">PRZEŻYJ NIESAMOWITE EMOCJE!</h1>
                <div  className="home_carousel-opinion">
                    <div className="grey-background"></div>
                    <div className="home-back home-back-opinions">
                        <div className="home-back-hands">
                            <Image
                                src="/assets/bear.webp"
                                alt="bear"
                                layout='responsive'
                                quality={40}
                                width={1500}
                                height={1000}
                            />
                        </div>
                        <div className="home-back-overlay home-back-overlay-opinions">
                            <div id="opinions" className="home_opinions_title">
                                <h2>ZADOWOLENI KLIENCI</h2>
                            </div>
                            <div className="home_carousel-content home_carousel-content-opinions">
                                <Carousel
                                    className="custom-carousel"
                                    showThumbs={false}
                                    showStatus={false}
                                    autoPlay
                                    interval={3000}
                                    infiniteLoop
                                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                        hasPrev && (
                                            <button type="button" onClick={onClickHandler} title={label}
                                                    className="carousel-prev">
                                                <FontAwesomeIcon icon={faChevronLeft}/>
                                            </button>
                                        )
                                    }
                                    renderArrowNext={(onClickHandler, hasNext, label) =>
                                        hasNext && (
                                            <button type="button" onClick={onClickHandler} title={label}
                                                    className="carousel-next">
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                            </button>
                                        )
                                    }
                                >
                                    {images.map((image, index) => (
                                        <div key={index} className="carousel-item">
                                            <img src={image.href} alt={image.name}/>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <Own_opinions/>
                </div>
                <div className="home-blonde">
                    <div className="home-blonde-jpg">
                        <Image
                            src="/assets/child.webp"
                            alt="blonde"
                            layout='responsive'
                            width={1456}
                            height={816}
                        />
                    </div>
                    <div className="home-blonde-overlay">
                        <div className="home-blonde-overlay-title">
                            <h2>ZAPEWNIMY TWOJEMU DZIECKU<br/>ANIMACYJNĄ DAWKĘ SZCZĘŚCIA!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCarouselOpinions