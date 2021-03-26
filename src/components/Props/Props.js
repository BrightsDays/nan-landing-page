import './Props.sass';
import reg from './assets/icons/reg.svg';
import box from './assets/icons/box.svg';
import win from './assets/icons/win.svg';
import Button from "../Button/Button";

const Props = () => {
    return(
        <div className="props">
            <div className="wrap">
                <h2 className="h2">Регистрируя код, вы вносите вклад</h2>
                <p className="p--rbold p--24 p--white">в заботу о малышах,<br /> которым помогают благотворительные фонды</p>
                <div className="props__list mb--25">
                    <div className="props__item">
                        <div className="props__icon">
                            <img src={reg} alt="Registration"/>
                        </div>
                        <p className="props__content p--18 p--white"><b className="b--18">Зарегистриуйте код</b> с упаковки на сайте</p>
                    </div>
                    <div className="props__item">
                        <div className="props__icon">
                            <img src={box} alt="Gift box"/>
                        </div>
                        <p className="props__content p--18 p--white"><b className="b--18">Получите гарантированный</b> кэшбек на телефон<sup>1</sup> и <b className="b--18">помогайте детям<sup>2</sup></b></p>
                    </div>
                    <div className="props__item">
                        <div className="props__icon">
                            <img src={win} alt="Contest"/>
                        </div>
                        <p className="props__content p--18 p--white"><b className="b--18">Участвуйте в еженедельном розыгрыше 100 000 руб!<sup>2</sup></b></p>
                    </div>
                </div>
                <Button text="Зарегистрировать" />
            </div>
        </div>
    );
};

export default Props;