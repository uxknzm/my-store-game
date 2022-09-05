import React from 'react';
import './CartItem.css'

const CartItem = ({ image, price, title, id }) => {
    return (
        <div className='cart__item'>
            {/* <span>{id}</span> */}
            <img alt='game' src={image} width="75px" />
            <span>{title}</span>
            <div className="cart__item-price">
                <span>{price} руб</span>
            </div>
        </div>
    );
};

export default CartItem;