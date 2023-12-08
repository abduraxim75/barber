import React from 'react';
import logo from "./assets/scissor.svg"
import man from "./assets/man.svg"
import notification from "./assets/notification.svg"

const Navbar = () => {
    return (
        <div className='container navbar-container'>
            <div className='img-container'>
                <img className='scissor' src={logo} alt="logo"/>
                <h1 className='img-text'>
                arber
                </h1>
            </div>
            <div>
                <ul className='ul-list'>
                    <li className='li-hover li__tit'>
                        <a>
                        Home
                        </a>
                    </li>
                    <li className='li-hover li__tit'>
                        <a>
                        History
                        </a>
                    </li>
                    <li className='li-hover li__tit'>
                        <a>
                        Service
                        </a>
                    </li>
                    <li className='li-hover li__tit'>
                        <a>
                        Gallery
                        </a>
                    </li>
                </ul>

            </div>
            <div className='icons'>
                <img src={man} alt="profile"/>
                <img className='notify' src={notification} alt="notification" />
                <button className='nav-button nav__lastbutton'>
                Appointment
                </button>

            </div>
        </div>
    );
}

export default Navbar;
