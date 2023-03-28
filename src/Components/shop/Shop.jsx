import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // useState muloto customer er kria collect kore,,,akhane kuno kichu store kore rakha hoy then akhan theke property gula nie onno jaygay dekhanu hoy....jemon first e amra product gula fetch kore akhane store korechi but akhn customer cart e jaa jaa add korbe sei sobgula akhane akta array hisebe store korbo then onno segula k jaygay dekhabo
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(()=> {
        const storedCart = getShoppingCart();
        //step-1 get id
        for(const id in storedCart){
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // step 3
            const quantity = storedCart[id];
            // addedProduct.quantity = quantity;
        }
    }, [products])
// nicher folder theke uporer folder e kuno props value pathanu jay na..but upore theke kuno function likhe seta k props hisebe nicher kuno folder e pathie dile and sekhan theke abar ai funtion k  parameter soho call korle uporer function e  value automatic chole asbe
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product => <Product
                                        key={product.id}
                                        product={product}
                                        handleAddToCart={handleAddToCart}
                                        ></Product>)
                }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;