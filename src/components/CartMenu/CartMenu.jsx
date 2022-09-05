import React from 'react';
import Button from '../button/Button';
import { calcTotalPrice } from '../utills';
import CartItem from '../cartItem/CartItem'
import './CartMenu.css'

const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart__menu'>
            <div className="cart__menu-games-list">
                {
                    items.length > 0 ? items.map(game =>
                        <CartItem key={game.title}
                            image={game.image}
                            price={game.price}
                            title={game.title}
                            id={game.id} />
                    ) : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ? (
                    <div className="cart__menu-arrange">
                        <div className="cart__menu-total-price">
                            <span>Итого: </span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <Button type='primary' size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                ) : null
            }
        </div>
    );
};

export default CartMenu;