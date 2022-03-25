import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name, picture, price} = props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;