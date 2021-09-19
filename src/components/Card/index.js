import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Card = ({ img, title, price, onFavorite }) => {

    const [checked, setChecked] = useState(false);

    const isAdded = () => {
        setChecked(checked ? false : true);
    }

    return (
        <div className='card'>
            <div className='heart' onClick={onFavorite}>
                <img src='img/heart.svg' alt="heartIcon" />
            </div>
            <Zoom zoomMargin={150}>
                <img
                    src={img}
                    width={133}
                    height={122}
                    alt="botas"
                />
            </Zoom>
            <p className='card__descr'>{title}</p>
            <div className='card-price'>
                <div className='card-price__bottom'>
                    <p>Цена:</p>
                    <b>{price} руб</b>
                </div>
                <button>
                    <img
                        width={32} height={32}
                        src={checked ? 'img/ok.svg' : 'img/plus.png'}
                        onClick={isAdded}
                        alt="plusIcon" className='plus'
                    />
                </button>
            </div>
        </div>
    )
}

export default Card;