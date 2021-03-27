import './Stock.sass';
import StockCard from "./StockCard/StockCard";
import gift_1 from './assets/icons/gift--1.svg';
import gift_2 from './assets/icons/gift--2.svg';
import gift_big from './assets/icons/gift--big.svg';
import Button from "../Button/Button";

const Stock = () => {
    return(
        <div className="stock">
            <div className="wrap">
                <h2 className="h2 mb--7">Вместе заботимся о малышах!<sup className="sup--squad sup--gold">2</sup></h2>
                <p className="stock__p p--rbold p--24 p--white">Получайте гарантированный подарок и помогайте детям!</p>
                <div className="stock__grid mb--21">
                    <StockCard weight={400} price={40} icon={gift_1} />
                    <StockCard weight={800} price={60} icon={gift_2} />
                    <div className="stock__daily">
                        <p className="p--18 p--white">Еженедельный розыгрыш суперприза:</p>
                        <span className="stock__price">100 000</span>
                        <span className="stock__price stock__price--s">рублей<sup className="sup--squad sup--gold">2</sup></span>
                        <p className="p--24 p--white">на заботу о малыше</p>
                        <p className="stock__char p--18 p--white"><b className="b--24">+ 10 000 рублей</b> будут перечислены в благотворительный фонд<sup className="sup">4</sup></p>
                        <div className="stock__icon">
                            <img src={gift_big} alt="Big gift"/>
                        </div>
                    </div>
                </div>
                <p className="p--14 p--white mb--17"><i className="i">*по вашему желанию может быть перечислена вся сумма подарка</i></p>
                <Button text="Зарегистрировать" />
            </div>
        </div>
    );
};

export default Stock;