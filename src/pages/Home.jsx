import React, { useContext } from 'react';
import AppContext from '../context';
import Card from '../components/Card';

function Home() {
    const {
        items,
        cartItems,
        favorites,
        loading,
        onAddHandler,
        searchedItems,
        onSearchHandler,
        onDeleteHandler,
        onFavoriteHandler
    } = useContext(AppContext);

    const Re = () => {
        const f = items.filter(item => item.name.toLowerCase().includes(searchedItems))
        return (loading ? [...Array(12)] : f)
            .map((el, ind) => (
                <Card
                    key={ind}
                    id={el?.id}
                    fav={false}
                    title={el?.name}
                    price={el?.price}
                    img={el?.imageUrl}
                    isLoading={loading}
                    onPlus={() => onAddHandler(el)}
                    onFavorite={() => onFavoriteHandler(el)}
                    onDelete={(obj, isFav) => onDeleteHandler(obj, isFav)}
                    isAdded={cartItems.some(ell => ell.imageUrl === el?.imageUrl)}
                    isFavorited={favorites.some(ell => ell.imageUrl === el?.imageUrl)}
                />
            ))

    }

    return (
        <div className='content'>
            <div className='content__main-wrapper'>
                <h1 className='content__header'>{searchedItems ? `Поиск по запросу: ${searchedItems}` : 'Все кроссовки'}</h1>
                <div className='content__search'>
                    <img src='img/search.svg' alt='search block' />
                    <input type='text' placeholder='Поиск...' value={searchedItems} onChange={onSearchHandler} />
                </div>
            </div>
            <div className='content__wrapper'>
                {
                    Re()
                }
            </div>
        </div>
    )
}

export default Home;