import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    // load data for product from data.json
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    //handle add to cart button
    const handleAddToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart)
        
    }


    // handle choose 1 for me button
    const chooseOne = (cart) => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const choosenCart = [cart[randomNumber]];
        setCart(choosenCart)
    }


    //handle reset button for resetting product in cart
    const resetProduct = (cart) => {
        setCart([])
    }

    

    
    return (
        <div className='shop-container'>
           
            {/* products part */}

            <div className='products-container'>
                
                {
                    products.map(product => <Product
                       
                        key = {product.id}
                        handleAddToCart={handleAddToCart}
                        product = {product}
                         
                        ></Product>)
                }
                 
            </div>
            
            {/* cart part */}

            <div className='cart-container'>
               <Cart 
               key = {cart.id}
               chooseOne = {chooseOne}
               resetProduct = {resetProduct}
               cart = {cart}
               ></Cart>
            </div>
        </div>
    );
};

export default Shop;