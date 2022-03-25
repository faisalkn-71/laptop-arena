import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>Laptop Arena</h1>
           

            <div className='link'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/subscribe">Subscribe</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;