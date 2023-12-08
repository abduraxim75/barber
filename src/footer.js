import React from 'react';
import logo from "./assets/scissor.svg"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import google from "./assets/google.svg"

const Footer = () => {
    return (
        <div className='container'>

                <img className='logo2' src={logo} alt="logo" />
                <h1 className='barber2 '>
                    arber
                </h1>
                <p className='footer-paragraph'>
                    It is a long established fact that a reader will be distracted by the readable
                </p>
            

            <div className='social-media'>

                <ul className='footer-social'>
                    <li>
                        <img src={facebook} />
                    </li>
                    <li>
                        <img src={twitter}/>
                    </li>
                    <li>
                        <img src={google} />
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Footer;
