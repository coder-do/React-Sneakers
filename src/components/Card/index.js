import React, { useState, useContext } from 'react';
import AppContext from '../../context';
import Zoom from 'react-medium-image-zoom';
import axios from 'axios';
import Loader from '../Loader';
import 'react-medium-image-zoom/dist/styles.css';

const Card = ({
    img,
    price,
    title,
    onPlus,
    onDelete,
    isLoading,
    onFavorite,
    isFavorited,
    fav = false
}) => {
    const { isItemAdded } = useContext(AppContext);
    const [favorite, setFavorite] = useState(false);

    let isAdded = isItemAdded(img);

    const isAddedToCart = async () => {
        if (!isAdded) {
            onPlus();
            isAdded = true;
        } else {
            const item = await fetchData('/cart', img);
            await onDelete(item[0].id, false);
            isAdded = false;
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
        <div className='card'>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className='heart' onClick={onFavoriteHandler}>
                            <img src={favorite || fav || isFavorited ? 'img/heart-red.svg' : 'img/heart.svg'} alt="heartIcon" />
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
                                <p>????????:</p>
                                <b>{price} ??????</b>
                            </div>
                            <button>
                                <img
                                    width={32} height={32}
                                    src={isAdded ? 'img/ok.svg' : 'img/plus.png'}
                                    onClick={isAddedToCart}
                                    alt="plusIcon" className='plus'
                                />
                            </button>
                        </div>
                    </>
                )
            }
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