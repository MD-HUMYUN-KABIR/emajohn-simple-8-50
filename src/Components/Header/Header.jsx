import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
            <a href="/home"> home</a>
            <a href="/home"> home</a>
            <a href="/home"> home</a>
            <a href="/home"> home</a>
            </div>
        </nav>
    );
};

export default Header;