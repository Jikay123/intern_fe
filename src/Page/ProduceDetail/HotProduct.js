import React from 'react'
import product_19 from '../../Assets/images/product_19.png';

const HotProduct = ({ title = "SẢN PHẨM BÁN CHẠY" }) => {
    const random = () => {
        let number = Math.floor(Math.random() * (10000 - 1) + 1);
        return number;
    }
    return (
        <div className="wrapHotProduct">
            <p class="wrapHotProduct__title">{title}</p>
            <div className="wrapHotProduct__item">
                <img class="wrapHotProduct__item--image img-fluid" src={product_19} alt="" />
                <div className="wrapHotProduct__item--info">
                    <p className="txtTitle">Mỹ phẩm châu âu</p>
                    <div className="wrapRating">
                        <span className="wrapStars"> {Array(5).fill("_").map((item, index) => (
                            <p key={index + random()}>⭐</p>
                        ))}</span>
                        <span className="txtCountOrder">(4 lượt mua)</span>
                    </div>
                    <p className="txtPrice">355.000đ</p>
                </div>
            </div>
            <div className="wrapHotProduct__item">
                <img class="wrapHotProduct__item--image img-fluid" src={product_19} alt="" />
                <div className="wrapHotProduct__item--info">
                    <p className="txtTitle">Mỹ phẩm châu âu</p>
                    <div className="wrapRating">
                        <span className="wrapStars"> {Array(5).fill("_").map((item, index) => (
                            <p key={index + random()}>⭐</p>
                        ))}</span>
                        <span className="txtCountOrder">(4 lượt mua)</span>
                    </div>
                    <p className="txtPrice">355.000đ</p>
                </div>
            </div>

            <div className="wrapHotProduct__item">
                <img class="wrapHotProduct__item--image img-fluid" src={product_19} alt="" />
                <div className="wrapHotProduct__item--info">
                    <p className="txtTitle">Mỹ phẩm châu âu</p>
                    <div className="wrapRating">
                        <span className="wrapStars"> {Array(5).fill("_").map((item, index) => (
                            <p key={index + random()}>⭐</p>
                        ))}</span>
                        <span className="txtCountOrder">(4 lượt mua)</span>
                    </div>
                    <p className="txtPrice">355.000đ</p>
                </div>
            </div>
        </div>
    )
}

export default HotProduct
