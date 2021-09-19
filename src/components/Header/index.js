import React from 'react';

const Header = ({ onClickCart }) => {
    return (
        <header>
            <div className='headerLeft'>
                <img src='img/logo.png' width={40} height={40} alt='logo' />
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='headerRight'>
                <li>
                    <img src='img/cart.svg' width={18} alt='cart' onClick={onClickCart} />
                    <span>1205 руб</span>
                </li>
                <li>
                    <img src='img/heart-no-border.svg' width={18} alt='heart' />
                </li>
                <li>
                    <img src='img/profile.svg' width={18} alt='profile' />
                </li>
            </ul>
        </header>
    )
}

export default Header;