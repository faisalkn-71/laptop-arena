import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected Products</h3>
            <button className='btn-random'>Choose 1 for me</button>
            <button className='btn-again'>Choose Again</button>
        </div>
    );
};

export default Cart;