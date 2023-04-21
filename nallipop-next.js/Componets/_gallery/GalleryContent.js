import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import storage from "../../firebase";
import { ref, getDownloadURL, list, listAll } from "firebase/storage";

const data = [
    {
        name: 'O MNIE',
        href: '/me',
    },
    {
        name: 'OFERTA',
        href: 'offer',
    },
    {
        name: 'ATRAKCJE',
        href: 'attractions',
    },
    {
        name: 'GALERIA',
        href: 'gallery',
    },
    {
        name: 'KONTAKT',
        href: 'contact',
    },
    {
        name: 'FORMULARZ',
        href: 'form',
    },
];

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
                        <div className="header-gallery-clouds" />
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