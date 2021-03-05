import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Navbar.css';

function Navbar() {
    // setState to initial value of false
    const [click, setClick] = useState(false);
    // set states for button
    const [button, setButton] = useState(true);

    // toggle state on click
    const handleClick = () => setClick(!click);
    // close menu when you clikc on a link
    const closeMobileMenu = () => setClick(false);

    // function to remove sign up button and show on mobile menu
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    // call showButton on window resize
    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navBar-logo" onClick={closeMobileMenu}>
                    TRVL <i class="fas fa-spa"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar

