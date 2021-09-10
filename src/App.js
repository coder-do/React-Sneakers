import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './App.sass';

function App() {
    return (
        <div className="wrapper">
            <header>
                <div className='headerLeft'>
                    <img src='img/logo.png' width={40} height={40} alt='logo' />
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img src='img/cart.svg' width={18} alt='cart' />
                        <span>1205 руб</span>
                    </li>
                    <li>
                        <img src='img/heart.svg' width={18} alt='heart' />
                    </li>
                    <li>
                        <img src='img/profile.svg' width={18} alt='profile' />
                    </li>
                </ul>
            </header>
            <div className='content'>
                <h1 className='content__header'>Все кроссовки</h1>
                <div className='content__wrapper'>
                    <div className='card'>
                        <Zoom zoomMargin={150}>
                            <img
                                src="img/card/card 1.jpg"
                                width={133}
                                height={122}
                            />
                        </Zoom>
                        <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className='card-price'>
                            <div className='card-price__bottom'>
                                <p>Цена:</p>
                                <b>12 999 руб</b>
                            </div>
                            <button>
                                <img width={32} height={32} src='img/plus.png' />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <Zoom zoomMargin={150}>
                            <img
                                src="img/card/card 2.jpg"
                                width={133}
                                height={122}
                            />
                        </Zoom>
                        <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className='card-price'>
                            <div className='card-price__bottom'>
                                <p>Цена:</p>
                                <b>12 999 руб</b>
                            </div>
                            <button>
                                <img width={32} height={32} src='img/plus.png' />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <Zoom zoomMargin={150}>
                            <img
                                src="img/card/card 3.jpg"
                                width={133}
                                height={122}
                            />
                        </Zoom>
                        <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className='card-price'>
                            <div className='card-price__bottom'>
                                <p>Цена:</p>
                                <b>12 999 руб</b>
                            </div>
                            <button>
                                <img width={32} height={32} src='img/plus.png' />
                            </button>
                        </div>
                    </div>
                    <div className='card'>
                        <Zoom zoomMargin={150}>
                            <img
                                src="img/card/card 4.jpg"
                                width={133}
                                height={122}
                            />
                        </Zoom>
                        <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className='card-price'>
                            <div className='card-price__bottom'>
                                <p>Цена:</p>
                                <b>12 999 руб</b>
                            </div>
                            <button>
                                <img width={32} height={32} src='img/plus.png' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
