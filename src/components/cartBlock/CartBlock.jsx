import React from 'react';
import { useSelector } from 'react-redux';
import { TbShoppingCart } from 'react-icons/tb'
import './CartBlock.css'
import CartMenu from '../CartMenu/CartMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsInCart from '../itemInCart/ItemsInCart';
import { useCallback } from 'react';


const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate(`/order`)
    }, [navigate])
    return (
        <div className='cart__block'>
            <ItemsInCart quantitly={items.length} />
            <TbShoppingCart size={25} className='cart__block-icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    );
};

export default CartBlock;