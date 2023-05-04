import React from 'react';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product, handleAddToCard }) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratting: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCard(product)} className='btn-cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-3'> Add To Card</span>
            </button>


        </div>
    );
};

export default Product;