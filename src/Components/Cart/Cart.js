import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const {cart, chooseOne, resetProduct} = props
   
    // console.log(cart)

   
   
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <h5>Selected Products: {cart.length}</h5>
            
                {
                    cart.map(item => <h6 className='selected-item'>{item.name}</h6>)
                }
           
            <button onClick={() => chooseOne(cart)} className='btn-random'>Choose 1 for me</button>
            <button onClick={() => resetProduct(cart)} className='btn-reset'>Reset</button>
        </div>
    );
};

export default Cart;