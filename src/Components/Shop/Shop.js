import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    // load data for product
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    //handle add to cart button
    const handleAddToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        console.log(newCart)
        setCart(newCart)
        
    }


    // handle choose 1 for me button
    const chooseOne = (cart) => {
        console.log(cart)
        const randomNumber = Math.floor(Math.random() * cart.length);
        console.log(randomNumber)

        const choosenCart = [cart[randomNumber]];
        console.log(choosenCart)

        setCart(choosenCart)
    }


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