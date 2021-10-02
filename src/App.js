import React, { useState, useEffect } from 'react';
import AppContext from './context';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';

const URL = 'https://6148209765467e0017384ce7.mockapi.io';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchedItems, setSearchedItems] = useState('');
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            await axios.get(`${URL}/card-items`, { responseType: 'json' })
                .then(res => { setLoading(false); setItems(res.data) })
            await axios.get(`${URL}/cart`, { responseType: 'json' })
                .then(res => setCartItems(res.data))
            await axios.get(`${URL}/favorites`, { responseType: 'json' })
                .then(res => setFavorites(res.data))
        }());

    }, []);

    const onFavoriteHandler = async (item) => {
        if (favorites.find((it) => it.id === item.id)) {
            await axios.delete(`${URL}/favorites/${item.id}`)
                .then(() => {
                    setFavorites(prev => prev.filter((el) => el.id !== item.id));
                })
        } else {
            await axios.post(`${URL}/favorites`, item)
                .then((res) => {
                    setFavorites(prev => [...prev, res.data])
                })
        }
    };

    const onAddHandler = async (item) => {
        await axios.post(`${URL}/cart`, item)
        setCartItems(prev => [...prev, item])
    };

    const onDeleteHandler = async (id, isFav) => {
        if (isFav) {
            await axios.delete(`${URL}/favorites/${id}`).then(res => {
                setFavorites(prev => prev.filter(item => item.imageUrl !== res.data.imageUrl));
            })
        } else {
            await axios.delete(`${URL}/cart/${id}`).then(res => {
                setCartItems(prev => prev.filter(item => item.imageUrl !== res.data.imageUrl));
            })
        }
    };

    const onSearchHandler = (e) => {
        setSearchedItems(e.target.value)
    };

    const isItemAdded = (imageUrl) => {
        return cartItems.some(ell => ell.imageUrl === imageUrl);
    };

    return (
        <AppContext.Provider
            value={{
                items,
                opened,
                loading,
                cartItems,
                favorites,
                searchedItems,
                isItemAdded,
                onAddHandler,
                onSearchHandler,
                onDeleteHandler,
                onFavoriteHandler,
                empty: favorites.length === 0
            }}
        >
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
                    <Home />
                </Route>

                <Route path='/favorites' exact>
                    <Favorites />
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
