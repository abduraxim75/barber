import React from 'react';
import haircut from './assets/haircut.svg';
import razor from './assets/razor.svg';
import facial from './assets/facial.svg';

const Infocard = () => {
    return (
        <div className='container'>
            <h1 className='card-title'>
                Services We Provide
            </h1>
            <div className='card'>
                <ul className='cards-ul'>
                    <li className='cards'>
                        <img className='card-img' src={haircut} alt="Haircut image" />
                        <h1 className='card-tith1'>
                            Hair Cut
                        </h1>
                        <p className='card-paragraph'>
                            Long established fact that a reacted by the readable content of
                            hen looking at.
                        </p>
                    </li>
                    <li className='cards'>
                        <img className='card-img' src={razor} alt="Beard cut image" />
                        <h1 className='card-tith1'>
                            Beard Cut
                        </h1>
                        <p className='card-paragraph'>
                            Long established fact that a reacted by the readable content of
                            hen looking at.
                        </p>
                    </li>
                    <li className='cards'>
                        <img className='card-img' src={facial} alt="Facial pack image" />
                        <h1 className='card-tith1'>
                            Facial Pack
                        </h1>
                        <p className='card-paragraph'>
                            Long established fact that a reacted by the readable content of
                            hen looking at.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Infocard; 