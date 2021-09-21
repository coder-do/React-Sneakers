import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import axios from 'axios';
import 'react-medium-image-zoom/dist/styles.css';

const Card = ({ img, title, price, onFavorite, onPlus, onDelete, fav = false }) => {
    const [checked, setChecked] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const isAdded = async () => {
        if (!checked) {
            onPlus();
            setChecked(checked ? false : true);
        } else {
            const item = await fetchData('/cart', img);
            await onDelete(item[0].id, false);
            setChecked(false);
        }
    }

    const onFavoriteHandler = async () => {
        if (!favorite) {
            onFavorite();
            setFavorite(favorite ? false : true);
        } else {
            const item = await fetchData('/favorites', img);
            await onDelete(item[0].id, true)
            setFavorite(false);
        }
    }

    return (
        <div className='card' >
            <div className='heart' onClick={onFavoriteHandler}>
                <img src={favorite || fav ? 'img/heart-red.svg' : 'img/heart.svg'} alt="heartIcon" />
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

async function fetchData(url, img) {
    const items = [];
    await axios.get(`https://6148209765467e0017384ce7.mockapi.io${url}`, { responseType: 'json' })
        .then(res => items.push(...res.data))
    const item = items.filter(it => img === it.imageUrl)
    return item
}

export default Card;