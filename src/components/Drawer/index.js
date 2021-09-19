import React from 'react';

const Drawer = ({ onClose }) => {
    return (
        <div className='drawer'>
            <h2>Корзина <img
                src='img/close.svg'
                className='drawer__close' alt="removeBtn"
                onClick={onClose}
            />
            </h2>

            <div className='items'>
                <div className='cartItem'>
                    <img className="cartItem__image" width={70} height={70} src='img/card/card 7.jpg' alt='cardtem' />
                    <div className="cartItem__wrapper">
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img src='img/close.svg' alt="closeBtn" className='removeBtn' />
                </div>

                <div className='cartItem'>
                    <img className="cartItem__image" width={70} height={70} src='img/card/card 5.jpg' alt='cardtem' />
                    <div className="cartItem__wrapper">
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>8 499 руб.</b>
                    </div>
                    <img src='img/close.svg' alt="closeBtn" className='removeBtn' />
                </div>
            </div>

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
        </div>
    )
}

export default Drawer;