import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchedItems, setSearchedItems] = useState('');
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        (async function () {
            await axios.get('https://6148209765467e0017384ce7.mockapi.io/card-items', { responseType: 'json' })
                .then(res => setItems(res.data))
            await axios.get('https://6148209765467e0017384ce7.mockapi.io/cart', { responseType: 'json' })
                .then(res => setCartItems(res.data))
            await axios.get('https://6148209765467e0017384ce7.mockapi.io/favorites', { responseType: 'json' })
                .then(res => setFavorites(res.data))
        }());
    }, []);

    const onFavoriteHandler = async (item) => {
        if (favorites.find((it) => it.id === item.id)) {
            await axios.delete(`https://6148209765467e0017384ce7.mockapi.io/favorites/${item.id}`)
                .then(() => {
                    setFavorites(prev => prev.filter((el) => el.id !== item.id));
                })
        } else {
            await axios.post('https://6148209765467e0017384ce7.mockapi.io/favorites', item)
                .then((res) => {
                    setFavorites(prev => [...prev, res.data])
                })
        }
    };

    const onAddHandler = async (item) => {
        await axios.post('https://6148209765467e0017384ce7.mockapi.io/cart', item)
        setCartItems(prev => [...prev, item])
    };

    const onDeleteHandler = async (id, isFav) => {
        if (isFav) {
            await axios.delete(`https://6148209765467e0017384ce7.mockapi.io/favorites/${id}`)
            setFavorites(prev => prev.filter(item => item.id !== id));
        } else {
            await axios.delete(`https://6148209765467e0017384ce7.mockapi.io/cart/${id}`)
            setCartItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const onSearchHandler = (e) => {
        setSearchedItems(e.target.value)
    };

    return (
        <div className="wrapper">
            {opened && (
                <div className='overlay'>
                    <Drawer
                        items={cartItems}
                        onClose={() => setOpened(false)}
                        onDelete={(obj) => onDeleteHandler(obj)}
                    />
                </div>
            )}

            <Header onClickCart={() => setOpened(true)} />

            <Route path='/' exact>
                <Home
                    items={items}
                    onAddHandler={onAddHandler}
                    searchedItems={searchedItems}
                    onSearchHandler={onSearchHandler}
                    onDeleteHandler={onDeleteHandler}
                    onFavoriteHandler={onFavoriteHandler}
                />
            </Route>

            <Route path='/favorites' exact>
                <Favorites
                    items={favorites}
                    onAddHandler={onAddHandler}
                    searchedItems={searchedItems}
                    onSearchHandler={onSearchHandler}
                    onDeleteHandler={onDeleteHandler}
                    onFavoriteHandler={onFavoriteHandler}
                />
            </Route>
        </div>
    );
}

export default App;
