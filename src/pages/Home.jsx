import React from 'react';
import Card from '../components/Card';

function Home({
    items,
    searchedItems,
    onSearchHandler,
    onAddHandler,
    onDeleteHandler,
    onFavoriteHandler
}) {
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
                {items.filter(item => item.name.toLowerCase().includes(searchedItems))
                    .map((el, ind) => {
                        return (
                            <Card
                                fav={false}
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

export default Home;