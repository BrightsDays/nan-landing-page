import './ProductCard.sass';
import Button from "../../Button/Button";

const ProductCard = ({image, name, bold, content}) => {
    return(
        <div className="product-card">
            <img className="product-card__image" src={image} alt={"Product"}/>
            <div className="product-card__heading">
                <h2 className="p--30 p--blue">{name}</h2>
                <p className="p--18"><b className="b--18">800 г. / 400 г.</b></p>
            </div>
            <p className="p--18"><b className="b--18">{bold}</b>{content}</p>
            <div className="product-card__buttons">
                <Button text="Подробнее" mod="--long"  />
                <Button text="Читать отзывы" mod="--gold" />
            </div>
        </div>
    );
};

export default ProductCard;