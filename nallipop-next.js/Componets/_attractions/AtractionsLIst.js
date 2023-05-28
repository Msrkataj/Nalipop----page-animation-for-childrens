import React, {useEffect, useState} from 'react';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import {ref, getDownloadURL, listAll} from "firebase/storage";
import storage from "../../firebase";

const AttractionsList = () => {
    const isVisible = useScrollAnimation('.attractions-list');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, "atr-page");

        listAll(storageRef)
            .then((res) => {
                const promises = res.items.map((itemRef) =>
                    getDownloadURL(itemRef).then((url) => ({
                        name: itemRef.name.split('.')[0], // usuniecie rozszerzenia
                        href: url,
                        description: itemRef.name,
                    }))
                );
                return Promise.all(promises);
            })
            .then((carouselItems) => {
                setImages(carouselItems)
                // reszta kodu...
            })
            .catch((error) => console.error("Error listing images:", error));
    }, []);

    const attractionsData = [
        {name: 'ballons', description: "Modelowanie balonów"},
        {name: 'line', description: "Zabawy z liną animacyjną"},
        {name: 'brocat', description: "Tatuaże brokatowe"},
        {name: 'dance', description: "Układy taneczne"},
        {name: 'plastic', description: "Kącik plastyczny"},
        {name: 'scarf', description: "Zabawy z chustą animacyjną"},
        {name: 'sports', description: "Konkurencje drużynowe"},
    ];

    const attractions = attractionsData.map(attraction => {
        const image = images.find(image => image.name === attraction.name);
        return {
            ...attraction,
            href: image ? image.href : undefined,
        };
    });
    return (
        <>
            <div className="page">
                <div className="container">
                    <h1 className="attractions-header">NASZE ATRAKCJE</h1>
                    <section className={`attractions-list${isVisible ? ' visible' : ''}`}>
                        {attractions.map((attraction, index) => (
                            <div className="attractions-list-content" key={index}>
                                <img className= {`attractions-list-content-photo`} src={attraction.href} alt={attraction.name} />
                                <h2 className= {`description-${index + 1}`} >{attraction.description}</h2>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    )
}

export default AttractionsList;