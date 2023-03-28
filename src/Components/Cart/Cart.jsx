import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart; option 1
    // const {cart} = props; //option 2
    console.log(cart);
//akhane cart hocche akta array.customer jei jei product gula add korbe sei product gula ta akhane store hobe and akhan theke prottekta product er price k nie amra jug kore vibonno kaj korbo
    let totalPrice = 0; //f2 for change all
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>selected item{cart.length}</p>
            <p>Toatl price: {totalPrice} </p>
            <p>shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h6>Grand Total: {grandTotal}</h6>
        </div>
    );
};

export default Cart;
/* 
jei structure vibonno jaygay use korbo seta k alada akta component e rakhbo
*/