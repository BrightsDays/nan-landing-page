import React from 'react';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Props from "../Props/Props";
import './App.sass';
import Stock from "../Stock/Stock";
import Products from "../Products/Products";

const App = () => {
    return(
        <div className="container">
            <Header />
            <Promo />
            <Props />
            <Stock />
            <Products />
        </div>
    )
};

export default App;