import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import './App.sass';

function App() {
    return (
        <div className="wrapper">
            <div style={{ display: 'none' }} className='overlay'>
                <Drawer />
            </div>

            <Header />

            <div className='content'>
                <div className='content__main-wrapper'>
                    <h1 className='content__header'>Все кроссовки</h1>
                    <div className='content__search'>
                        <img src='img/search.svg' alt='search block' />
                        <input type='text' placeholder='Поиск...' />
                    </div>
                </div>
                <div className='content__wrapper'>
                    <Card img='img/card/card 1.jpg' title='Мужские Кроссовки Nike Blazer Mid Suede' price='12 999' />
                    <Card img='img/card/card 2.jpg' title='Мужские Кроссовки Nike Air Max 270' price='12 999' />
                    <Card img='img/card/card 3.jpg' title='Мужские Кроссовки Nike Blazer Mid Suede' price='8 499' />
                    <Card img='img/card/card 4.jpg' title='Кроссовки Puma X Aka Boku Future Rider' price='5 499' />

                </div>
            </div>
        </div>
    );
}

export default App;
