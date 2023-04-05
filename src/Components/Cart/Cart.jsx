import React from 'react';
import './Cart.css'

const Cart = ({cart , handleClearCart , children}) => {
    // const cart = props.cart; option 1
    // const {cart} = props; //option 2
    // console.log('cart.jsx line 7', cart);
//akhane cart hocche akta array.customer jei jei product gula add korbe sei product gula ta akhane store hobe and akhan theke prottekta product er price k nie amra jug kore vibonno kaj korbo
    let totalPrice = 0; //f2 for change all
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){

        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
         //or
        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>selected item{quantity}</p>
            <p>Toatl price: {totalPrice} </p>
            <p>shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear'> clear</button>
            {children}
        </div>
    );
};

export default Cart;
/* 
jei structure vibonno jaygay use korbo seta k alada akta component e rakhbo
*/