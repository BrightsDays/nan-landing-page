import './StockCard.sass';

const StockCard = ({ weight, price, icon }) => {
    return(
        <div className="stock-card">
            <div className="stock-card__header">
                <div className="stock-card__price">
                    <p className="p--18 p--rob">За банку <b className="b--18">{weight} г.</b></p>
                    <span className="span--gold">{price} рублей</span>
                </div>
                <img src={icon} alt="Gift" />
            </div>
            <div className="stock-card__content">
                <div className="stock-card__content--left">
                    <p className="p--18 p--rob"><b className="b--18">{0.75 * price} рублей</b> вам на телефон</p>
                </div>
                <div className="stock-card__content--plus">
                    <p className="p--18 p--rob"><b className="b--18">+</b></p>
                </div>
                <div className="stock-card__content--right">
                    <p className="p--18 p--rob"><b className="b--18">{0.25 * price} рублей*</b> будут перечислены в благотворительный фонд на ваш выбор</p>
                </div>
            </div>
        </div>
    );
};

export default StockCard;