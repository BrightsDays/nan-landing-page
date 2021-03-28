import React from "react";
import useWindowSize from "../../service/useWindowSize";
import './Header.sass';
import logo from './assets/img/nan_logo.svg';
import user from '../Header/assets/icons/user.svg';
import menu from '../Header/assets/icons/menu.svg';
import close from '../Header/assets/icons/close.svg'


const Header = () => {
    const Nav = ({ items }) => {
        const size = useWindowSize();

        if (size.width > 930) {
            return(
                <nav className="header__nav">
                    {items &&
                    items.map((item, index) => (
                        <a className="header__item"
                           href=""
                           key={index}>
                            {item}
                        </a>
                    ))}
                </nav>
            );
        } else {
            return(
                <nav className="header__nav">
                    <a className="header__item" href="">
                        <img src={user} alt="Login" />
                    </a>
                    <a className="header__item" href="">
                        <img src={menu}
                             alt="Menu"
                             onClick={e => {
                                 e.preventDefault();
                                 document.querySelector('.burger').classList.add('burger--show');
                                 document.body.style.overflow = 'hidden';
                             }} />
                    </a>
                    <div className="burger">
                        {items &&
                        items.map((item, index) => (
                            <a className="burger__item"
                               href=""
                               key={index}>
                                {item}
                            </a>
                        ))}
                        <a className="burger__item" href="">Полные правила акции</a>
                        <a className="burger__item" href="">Политика конфиденциальности</a>
                        <a className="burger__close" href="">
                            <img src={close}
                                 alt="close"
                                 onClick={e => {
                                     e.preventDefault();
                                     document.querySelector('.burger').classList.remove('burger--show');
                                     document.body.style.overflow = 'hidden scroll';
                                 }}/>
                        </a>
                    </div>
                </nav>
            );
        }
    };

    return(
        <div className="header">
            <img className="header__logo" src={logo} />
            <Nav items={['Главная', 'Фонды', 'Победители', 'Вопросы-ответы', 'Личный кабинет']}/>
        </div>
    )
}

export default Header;