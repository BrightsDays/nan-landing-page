import React from "react";
import './Header.sass';
import logo from '../App/assets/img/nan_logo.svg'

const Header = () => {
    const Nav = ({ items }) => {
        return(
            <nav className="header__nav">
                {items &&
                    items.map((item, index) => (
                    <a className="header__item" href="" key={index}>
                        {item}
                    </a>
                ))}
            </nav>
        );
    };

    return(
        <div className="header">
            <img className="header__logo" src={logo} />
            <Nav items={['Главная', 'Фонды', 'Победители', 'Вопросы-ответы', 'Личный кабинет']}/>
        </div>
    )
}

export default Header;