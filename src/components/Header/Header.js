import React from "react";
import useWindowSize from "../../service/useWindowSize";
import './Header.sass';
import logo from './assets/img/nan_logo.svg';
import user from '../Header/assets/icons/user.svg';
import menu from '../Header/assets/icons/menu.svg';


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
                        <img src={menu} alt="Menu" />
                    </a>
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