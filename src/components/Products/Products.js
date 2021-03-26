import './Products.sass';
import ProductCard from "./ProductCard/ProductCard";
import nan3 from './assets/img/nan_3.png';
import nan4 from './assets/img/nan_4.png';

const Products = () => {
    return(
        <div className="products">
            <div className="wrap">
                <h2 className="h2 mb--7">Продукты NAN® Optipro®,</h2>
                <p className="stock__p p--rbold p--24 p--white">участвующие в акции</p>
                <div className="products__list">
                    <ProductCard image={nan3}
                                 name="NAN® 3 Optipro®"
                                 bold="Молочко NAN® 3 разработано специально для малышей от 12 месяцев. "
                                 content="В период активного познания мира ребенку крайне важно получать все необходимые питательные вещества, поэтому при выборе питания важно учитывать соответствие возрасту ребенка." />
                    <ProductCard image={nan4}
                                 name="NAN® 4 Optipro®"
                                 bold="Детское молочко NAN® 4 для детей от 18 месяцев "
                                 content="содержит всё необходимое для здоровья малыша и помогает поддержать его иммунитет, что так важно в этом возрасте." />
                </div>
                <p className="products__buy p--18 p--white">Купить продукцию, участвующую в акции, можно <b className="b--18">в любых магазинах на территории РФ!</b></p>
            </div>
        </div>
    );
};

export default Products;