import React from 'react';
import worker from "./assets/worker.png"

const Worker = () => {
    return (
        <div className='container'>
            <div className='workers'>
                <img className='barber-shop' src={worker} alt="worker" />
                <div className='workers-title'>
                    <h1>
                        Our History
                    </h1>
                    <p className='section-p'>
                        It is a long established fact that a reader will be distracted by the readable content of a page w
                        hen looking at.
                                            
                    </p>
                    <p className='section-p'>
                        It is a long established fact that a reader will be distracted by the readable content of a page w
                        hen looking at.
                    </p>
                    <button className='nav-button nav__lastbutton sect-btn'>
                        Learn More
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Worker;
