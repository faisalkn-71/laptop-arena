import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const {cart, chooseOne, resetProduct} = props
   

    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <h5>Selected Products: {cart.length}</h5>
            
                {
                    cart.map(item => <h5 
                        key = {item.id} className='selected-item'>{item.name}</h5>)
                }
           
            <button onClick={() => chooseOne(cart)} className='btn-random'>Choose 1 for me</button>

            <button onClick={() => resetProduct(cart)} className='btn-reset'>Reset</button>
            
        </div>
    );
};

export default Cart;