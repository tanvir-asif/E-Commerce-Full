import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // product quantity maintain

    const handleAddToCard = (selectedProduct) => {
        console.log(selectedProduct);

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCarts(newCart);

    };

    // clear cart button
    const clearCart = () => {
        setCarts([])
    }

    return (

        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCard={handleAddToCard}
                ></Product>)}
            </div>

            <div className="card-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>

    );
};

export default Shop;