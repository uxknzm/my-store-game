import React from 'react';
import { useDispatch } from 'react-redux'
import GameCover from '../gameCover/GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './OrderItem.css'
import { deleteIteminCart } from '../../redux/cart/reducer';

const OrderItem = ({game}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteIteminCart(game.id))
    }
    return (
        <div className='order__item'>
            <div className="order__item-cover">
                <GameCover image={game.image} />
            </div>
            <div className="order__item-title">
                <span>{game.title}</span>
            </div>
            <div className="order__item-price">
                <span>{game.price} руб</span>
                <AiOutlineCloseCircle
                size={25}
                className='cart__item-delete-icon'
                onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default OrderItem;