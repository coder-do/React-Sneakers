import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Card = ({ img, title, price }) => {
    return (
        <div className='card'>
            <div className='heart'>
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
                    <img width={32} height={32} src='img/plus.png' alt="plusIcon" />
                </button>
            </div>
        </div>
    )
}

export default Card;