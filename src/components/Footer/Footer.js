import './Footer.sass';
import ok from './assets/icons/ok.svg';
import vk from './assets/icons/vk.svg';
import fb from './assets/icons/f.svg';
import useWindowSize from "../../service/useWindowSize";

const Footer = () => {

    const Nav = ({ items }) => {
        const size = useWindowSize();

        if (size.width > 880) {
            return(
                <nav className="footer__nav">
                    {items &&
                    items.map((item, index) => (
                        <a className="footer__item" href="" key={index}>
                            {item}
                        </a>
                    ))}
                    <div className="social">
                        <div className="social__icon social__icon--ok"><img src={ok} alt="OK"/></div>
                        <div className="social__icon social__icon--vk"><img src={vk} alt="VK"/></div>
                        <div className="social__icon social__icon--fb"><img src={fb} alt="FB"/></div>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="footer__nav">
                    <a className="footer__item" href="">Рассказать друзьям</a>
                    <div className="social">
                        <div className="social__icon social__icon--ok"><img src={ok} alt="OK"/></div>
                        <div className="social__icon social__icon--vk"><img src={vk} alt="VK"/></div>
                        <div className="social__icon social__icon--fb"><img src={fb} alt="FB"/></div>
                    </div>
                    <a className="footer__item" href="">Полные правила акции</a>
                    <a className="footer__item" href="">Политика конфиденциальности</a>
                </nav>
            );
        }
    };

    return(
        <div className="footer wrap wrap--1440">
            <Nav items={['Полные правила акции', 'Политика конфиденциальности', 'Рассказать друзьям']} />
            <p className="p--12 p--white mb--17">
                Всемирная организация здравоохранения рекомендует исключительно грудное вскармливание в первые 6 месяцев и его продолжение в течение как можно более долгого периода. Детское молочко NAN   3 OPTIPRO   и NAN   4 OPTIPRO   разработаны с учетом пищевых потребностей здоровых детей старше 1/1,5 лет соответственно и не должны применяться для кормления детей более младшего возраста. Не являются заменителем грудного молока. Необходима консультация специалиста. Товар зарегистрирован. Полный список подарков — на сайте www.nestlebaby.ru/nan3promo.
            </p>
            <p className="p--12 p--white">
                1. Специальное предложение в рамках промоакции. Сроки проведения акции: с 01.10.2020 г. по 15.03.2021 г. Сроки регистрации промокодов: с 01.10.2020 г. по 28.02.2021 г. Сроки выдачи подарков: 01.11.2020 г. по 15.03.2021 г. Информация об организаторе акции, правилах ее проведения, количестве подарков и призов, сроках, месте и порядке их получения — на сайте www.nestlebaby.ru/nan3promo и по телефону горячей линии 8-800-200-8-800. Внешний вид подарков может отличаться от заявленного на упаковке. Подарок предоставляется за покупку товара, участвующего в промоакции, в сроки проведения промоакции.<br />
                2. Денежный сертификат на сумму 100 000 руб., который можно в том числе потратить на приобретение полиса ДМС у страховой компании в порядке и на условиях, указанных в правилах акции.<br />
                3. Вклад осуществляется путем перевода денежных средств в благотворительный фонд на условиях, указанных в правилах акции на сайте www.nestlebaby.ru/nan3promo.<br />
                4. Выбор благотворительного фонда осуществляется из предложенного в правилах акции списка фондов. ®Владелец товарных знаков: Société des Produits Nestlé S.A. (Швейцария).
            </p>
        </div>
    )
};

export default Footer;