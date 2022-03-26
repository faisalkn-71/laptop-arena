import React from 'react';
import Item from '../Item/Item';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)

   
   
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <h5>Selected Products: {cart.length}</h5>
            <ol>
                {
                    cart.map(item => <Item
                    key = {item.id}
                    item = {item}
                    ></Item>)
                }
            </ol>
            <button className='btn-random'>Choose 1 for me</button>
            <button className='btn-again'>Choose Again</button>
        </div>
    );
};

export default Cart;