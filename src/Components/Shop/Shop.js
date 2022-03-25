import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            {/* products part */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    ></Product>)
                }
            </div>
            
            {/* cart part */}
            <div className='cart-container'>
                <h1>cart part</h1>
            </div>
        </div>
    );
};

export default Shop;