import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onClickCart }) => {
    return (
        <header>
            <div className='headerLeft'>
                <Link to='/'>
                    <img src='img/logo.png' width={40} height={40} alt='logo' />
                </Link>
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
                    <Link to='/favorites'>
                        <img src='img/heart-no-border.svg' style={{ verticalAlign: 'middle', width: '19px', height: '19px' }} alt='heart' />
                    </Link>
                </li>
                <li>
                    <img src='img/profile.svg' width={18} alt='profile' />
                </li>
            </ul>
        </header>
    )
}

export default Header;