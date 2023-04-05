import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // useState muloto customer er kria collect kore,,,akhane kuno kichu store kore rakha hoy then akhan theke property gula nie onno jaygay dekhanu hoy....jemon first e amra product gula fetch kore akhane store korechi but akhn customer cart e jaa jaa add korbe sei sobgula akhane akta array hisebe store korbo then onno jaygay segula k dekhabo

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    //amra outside er kuno kichu jokhon kuno browser ba onno kichur sathe interect kori thik tokhon  e useEffect use kori. tai amra akhn local storage theke customer er add kora object gula nie kaj korbo tai useEffect chalabo
    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        console.log('save cart line 21 shop.jsx', savedCart);
        //step-1 get id
        for(const id in storedCart){
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // localstorage e set kora id er product er sathe "main products" er jei product ta milbe seta k "addedProduct" variable e set korbo. then localstorage e add kora id er quantity joto hobe seta abar addedProduct variable er prottekta product er quantity hisebe set kore dibo..jeno ai quantity ta local storage e set kora quantityr soman thake ar seta k e UI te dekhabo. tahole ei productgula k akta array te push kore sekhan theke UI te dekhabo 


            // console.log(addedProduct);
           
            // step 3 add quantity first e localstorage e addedproduct na o thakte pare ,ar na thakle undefined dekhabe tai product thakle setar upore kaj korbo
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // local storage e add kora idr quantity and product er idr quantity soman kore dilam
                savedCart.push(addedProduct);
            }
            // console.log('added product', addedProduct);
        }
         setCart(savedCart); // akhane hocche j automatic jeno ager cart er moto e akta array setCart e set hoy
        //akhn finally cart e ai array ta e set hbe and ata k e UI te dekhabe.ager jei cart ta chilo sekhane prottekta product er quantity chilo na but akhn er cart e quantity localstorage er product er quantityr same kore dewa hoyeche

    }, [products])// ader useEffect kore set kora products gula akhane rehe dilam ...akhn ai product gula theke abar kaj korte parbo


// nicher folder theke uporer folder e kuno props value pathanu jay na..but upore theke kuno function likhe seta k props hisebe nicher kuno folder e pathie dile and sekhan theke abar ai funtion k  parameter soho call korle uporer function e  value automatic chole asbe
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        //aikhane click er maddhome akta array setcart a cart hisebe set kortechi jekhane default product thakbe jei product e kuno quantityr value thakbe na but abar useEffect kore oi ak e array k setCart e cart hisebe set kortechi jei product er quantity hobe localStorage e add kora product er soman

        setCart(newCart);//akhane hocche jeno click korle e setcart e cart array add hoy and useEffect theke o setCart e arekta same cart array e automatic Vabe set kora hoyeche
        addToDb(product.id);
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
            <Cart 
            handleClearCart={handleClearCart}
            cart={cart}
            > 
            <Link to="/orders"> <button className='btn-review'>review order</button></Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;