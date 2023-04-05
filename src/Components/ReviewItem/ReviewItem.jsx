import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, price, name, quantity}  = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p>id {id}</p>
            <p>price : {price}</p>
            <p>name : {name}</p>
            <p>quantity : {quantity}</p>
           </div>
           <button onClick={()=> handleRemoveFromCart(id)} className='btn-delete'>delete</button>
        </div>
    );
};

export default ReviewItem;