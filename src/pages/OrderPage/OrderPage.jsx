import React from 'react';
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/utills';
import OrderItem from '../../components/orderItem/OrderItem'
import './OrderPage.css'

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    if(items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }
    return (
        <div className='order__page'>
            <div className="order__page-left">
                {items.map(game => <OrderItem game={game} />)}
            </div>
            <div className="order__page-right">
                <div className="order__page-total-price">
                    <span>
                        {items.length} товаров на сумму { calcTotalPrice(items) } руб.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;