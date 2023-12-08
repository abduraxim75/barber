import React from 'react';
import barber from "./assets/barber.png"

const Sectio2 = () => {
    return (
        <div className='container barber-container'>
            <div className='section-container'>
                <h1 className='section-h1'>
                    Hairstyle Reflects The Personality Inside You
                </h1>
                <p className='section-p'>
                    It is a long established fact that a reader will be distracted by the readable content of a page w
                    hen looking at.
                </p>
                <button className='nav-button nav__lastbutton sect-btn'>
                Get Started
                </button>
            </div>
            <img className='barber' src={barber} alt="barber"/>
        </div>
    );
}

export default Sectio2;
