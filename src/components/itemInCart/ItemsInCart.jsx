import React from 'react';
import './ItemsInCart.css'

const ItemsInCart = ({
    quantitly = 0
}) => {
    return quantitly > 0 ? (
        <div className='items__in__cart'>
            {quantitly}
        </div>
    ): null
};

export default ItemsInCart;