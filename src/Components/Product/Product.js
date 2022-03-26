import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const {name, picture, price} = props.product
    return (
        <div className='product '>
            <img className='img-fluid' src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
            Add To Cart  
            <FontAwesomeIcon className='btn-icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;