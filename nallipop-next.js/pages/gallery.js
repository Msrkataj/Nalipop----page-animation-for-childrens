import React from 'react';

import Footer from "../Componets/Home/Footer";
import GalleryContent from "../Componets/_gallery/GalleryContent";
import GalleryHeader from "../Componets/_gallery/GalleryHeader";
import GalleryForm from "../Componets/_gallery/GalleryForm";

const Gallery = () => {
    return (
        <>
            <GalleryHeader/>
            <main>
                <GalleryContent/>
                <GalleryForm/>
            </main>
            <Footer/>
        </>
    );
};

export default Gallery;