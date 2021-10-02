import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {
    const {
        loading,
        favorites,
        searchedItems,
        onAddHandler,
        onDeleteHandler,
        onFavoriteHandler
    } = useContext(AppContext);

    const Favs = () => {
        const f = favorites.filter(item => item.name.toLowerCase().includes(searchedItems));
        return (loading ? [...Array(4)] : f).map((el, ind) => {
            return (
                <Card
                    fav
                    key={ind}
                    id={el?.id}
                    title={el?.name}
                    price={el?.price}
                    img={el?.imageUrl}
                    isLoading={loading}
                    onPlus={() => onAddHandler(el)}
                    onFavorite={() => onFavoriteHandler(el)}
                    onDelete={(obj, isFav) => onDeleteHandler(obj, isFav)}
                />
            )
        })
    }

    return (
        <div className='content'>
            <div className='content__main-wrapper'>
                <h1 className='content__header'><Link to='/'>
                    <img src='img/go-back.svg' className='go-back' alt='go back' />
                </Link>Мои закладки</h1>
            </div>
            <div className='content__wrapper'>
                <Favs />
            </div>
        </div>
    )
}

export default Favorites;