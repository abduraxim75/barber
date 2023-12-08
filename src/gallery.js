import React from 'react';
import gallery from "./assets/gallery.svg"

const Gallery = () => {
    return (
        <div className='container'>
            <div  className='gallery-h1'>
                <h1>
                    Our Gallery
                </h1>
            </div>

            <div className='galery-img'>
                <img className='gallery-img' src={gallery} alt="#" />
                <img className='gallery-img' src={gallery} alt="#" />
                <img className='gallery-img' src={gallery} alt="#" />
                <img className='gallery-img' src={gallery} alt="#" />
                <img className='gallery-img' src={gallery} alt="#" />
                <img className='gallery-img' src={gallery} alt="#" />
            </div>
            <button className='nav-button nav__lastbutton gbtn'>
                View All
                </button>
        </div>
    );
}

export default Gallery;
