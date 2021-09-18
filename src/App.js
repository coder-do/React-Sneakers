import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const content = [
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageUrl: 'img/card/card 1.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        imageUrl: 'img/card/card 2.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        imageUrl: 'img/card/card 3.jpg'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        imageUrl: 'img/card/card 4.jpg'
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: 15199,
        imageUrl: 'img/card/card 5.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie 7',
        price: 11299,
        imageUrl: 'img/card/card 6.jpg'
    },
    {
        name: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: 10799,
        imageUrl: 'img/card/card 7.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike LeBron XVIII',
        price: 16499,
        imageUrl: 'img/card/card 8.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Lebron XVIII Low',
        price: 13999,
        imageUrl: 'img/card/card 9.jpg'
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8499,
        imageUrl: 'img/card/card 10.jpg'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        imageUrl: 'img/card/card 11.png'
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
        price: 11299,
        imageUrl: 'img/card/card 12.jpg'
    },
]

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
                    {content.map((el, ind) => {
                        return (
                            <Card
                                img={el.imageUrl}
                                price={el.price}
                                title={el.name}
                                key={ind}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
