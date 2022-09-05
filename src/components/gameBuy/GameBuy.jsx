import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIteminCart, setItemInCart } from '../../redux/cart/reducer';
import Button from '../button/Button';
import './GameBuy.css'

const GameBuy = ({ game }) => {
    const dispath = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if ( isItemInCart ) {
            dispath(deleteIteminCart(game.id))
        } else {
            dispath(setItemInCart(game))
        }
    }

    return (
        <div className='game__buy'>
            <span className='game__buy-price'>{game.price} руб.</span>
            <Button
            type={ isItemInCart ? 'secondary' : 'primary' }
             onClick={ handleClick }
            >
               { isItemInCart ? 'Убрать из корзины' : 'В Корзину' } 
            </Button>
        </div>
    );
};

export default GameBuy;