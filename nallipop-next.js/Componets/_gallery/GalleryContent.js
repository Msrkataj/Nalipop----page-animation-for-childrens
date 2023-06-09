import React, { useState, useEffect } from 'react';
import storage from "../../firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";


const GalleryContent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const galleryRef = ref(storage, 'gallery');
                const result = await listAll(galleryRef);
                const urlPromises = result.items.map(item => getDownloadURL(item));
                const urls = await Promise.all(urlPromises);
                setImages(urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }

        fetchImages();
    }, []);

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className="gallery">
                        <div className="gallery-clouds-header gallery-clouds" />
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </div>
                        ))}
                    </section>
                    <div className="gallery-banner">
                        <p>NIECH TWOJE DZIECKO WPADNIE W WIR ANIMACYJNEGO SZALEŃSTWA!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryContent;