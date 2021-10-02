import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Drawer = ({ onClose, onDelete, items = [] }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        (async function () {
            await axios.get('https://6148209765467e0017384ce7.mockapi.io/cart', { responseType: 'json' })
                .then(res => setCartItems(res.data))
        }())
    }, [])

    const empty = cartItems.length !== 0;

    return (
        <div className='drawer'>
            <h2>Корзина <img
                src='img/close.svg'
                className='drawer__close' alt="removeBtn"
                onClick={onClose}
            />
            </h2>

            {!empty && <Empty onClose={onClose} />}
            <div className='items'>
                {
                    cartItems.map((el, ind) =>
                    (
                        <div className='cartItem' key={ind}>
                            <img className="cartItem__image" width={70} height={70} src={el.imageUrl} alt='cardtem' />
                            <div className="cartItem__wrapper">
                                <p>{el.name}</p>
                                <b>{el.price} руб.</b>
                            </div>
                            <img src='img/close.svg' alt="closeBtn"
                                className='removeBtn' onClick={() => {
                                    onDelete(el.id);
                                    setCartItems(prev => prev.filter(item => item.id !== el.id));
                                }} />
                        </div>
                    )
                    )
                }
            </div>

            {
                empty && (
                    <div className='ulBlock'>
                        <ul className='drawer__footer'>
                            <li className='drawer__footer-item'>
                                <span>Итого: </span>
                                <div></div>
                                <b>21 498 руб. </b>
                            </li>
                            <li className='drawer__footer-item'>
                                <span>Налог 5%: </span>
                                <div></div>
                                <b>1074 руб. </b>
                            </li>
                        </ul>
                        <button className='green_button'>Оформить заказ <img src='img/arrow.svg' alt='arrow' /></button>
                    </div>
                )
            }
        </div>
    )
}

function Empty({ onClose }) {
    return (
        <div className='emptyCart'>
            <img src='img/empty_cart.png' width={120} height={120} alt='empty' />
            <h2>Корзина пустая</h2>
            <p className="emptyCart__descr">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className='green_button' onClick={onClose}>
                <img src='img/arrow.png' alt='arrow' /> Вернуться назад
            </button>
        </div>
    )
}

export default Drawer;