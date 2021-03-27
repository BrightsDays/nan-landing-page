import './Promo.sass';
import product from './assets/img/nan_product.png';
import podaryZhizn from './assets/img/podary_jhizn.svg';
import liniyaJhizni from './assets/img/liniya_jhizni.svg';
import dorogaZhizni from './assets/img/doroga_zhizni.svg';
import detskieSerdtsa from './assets/img/detskie_serdtsa.svg';
import Button from "../Button/Button";


const Promo = () => {
    return(
        <div className="promo">
            <div className="wrap">
                <h1 className="h1">Вместе заботимся о малышах!<sup className="sup--squad sup--pink">3</sup></h1>
                <p className="p--rbold p--24 p--blue">Получайте гарантированный подарок и помогайте детям!</p>
                <div className="promo__reg">
                    <input className="promo__input" placeholder="Ввести код" />
                    <Button text="Зарегистрировать" />
                </div>
                <p className="promo__info p--rob p--18 p--black mb--27">Вы можете зарегистрировать код через приложение «Whats App» по номеру <b className="b--18">+7 (916) 000-10-66</b></p>
                <img  className="promo__product mb--33" src={product} alt="product" />
                <div className="promo-total">
                    <img className="promo-total__item" src={podaryZhizn} alt="podary_jhizn" />
                    <img className="promo-total__item" src={liniyaJhizni} alt="liniya_jhizni" />
                    <img className="promo-total__item" src={dorogaZhizni} alt="doroga_zhizni" />
                    <img className="promo-total__item" src={detskieSerdtsa} alt="detskie_serdtsa" />
                    <div className="promo-total__count">
                        <p className="p--rbold p--18 p--black">Всего перечислено в фонды</p>
                        <span className="span--gold">320 910 рублей</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;