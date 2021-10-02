import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {
    const {
        favorites,
        searchedItems,
        onAddHandler,
        onDeleteHandler,
        onFavoriteHandler
    } = useContext(AppContext);

    return (
        <div className='content'>
            <div className='content__main-wrapper'>
                <h1 className='content__header'><Link to='/'>
                    <img src='img/go-back.svg' className='go-back' alt='go back' />
                </Link>Мои закладки</h1>
            </div>
            <div className='content__wrapper'>
                {favorites.filter(item => item.name.toLowerCase().includes(searchedItems))
                    .map((el, ind) => {
                        return (
                            <Card
                                fav
                                id={el.id}
                                key={ind}
                                img={el.imageUrl}
                                price={el.price}
                                title={el.name}
                                onPlus={() => onAddHandler(el)}
                                onFavorite={() => onFavoriteHandler(el)}
                                onDelete={(obj, isFav) => onDeleteHandler(obj, isFav)}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Favorites;