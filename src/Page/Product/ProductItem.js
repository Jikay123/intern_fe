import React from 'react'
import produdct_1 from '../../Assets/images/product_1.jpg'


const ProductItem = ({ type, show = false, img = produdct_1, title }) => {
    const random = () => {
        let number = Math.floor(Math.random() * (10000 - 1) + 1);
        return number;
    }

    return !show ? (
        <div className={`  wrapProductItem ${type === "small" ? 'small' : ' col-sm-4 col-6'}`} >
            <img className="product__img" src={img} alt="" />
            <div className="product__info">
                <p className="product__info--name">OHUI</p>
                <p className="product__info--description">Mỹ phẩm châu Âu</p>
                <div className="product__info--price">
                    <p className="price__new">355.000 <span className="unit">đ</span></p>
                    <p className="price__old">455.000 <span className="unit">đ</span></p>
                </div>
                <div className="wrapListButton">
                    <button className="order">Mua hàng</button>
                    <button className="favorite"><i className="fa fa-heart"></i></button>
                    <button className="ellipsis"><i class="fas fa-ellipsis-v"></i></button>
                </div>
            </div>
        </div>
    ) : (
        <div className="wrapProductItem">
            <img className="product__img" src={img} alt="" />
            <div className="product__info">
                {/* <p className="product__info--name">{title}</p> */}
                <p className="product__info--title">Mỹ phẩm châu Âu</p>
                <p className="product__info--description">
                    Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.
                </p>
                <div className="rating">
                    {Array(5).fill("_").map((item, index) => (
                        <p key={index + random()}>⭐</p>
                    ))}
                    <span>&nbsp;(14 lượt bình luận)</span>
                </div>
                <div className="product__info--price">
                    <p className="price__new">355.000 <span className="unit">đ</span></p>
                    <p className="price__old">455.000 <span className="unit">đ</span></p>
                </div>
                <div className="wrapListButton ">
                    <button className="order">Mua hàng</button>
                    <button className="favorite"><i className="fa fa-heart"></i></button>
                    <button className="ellipsis"><i class="fas fa-ellipsis-v"></i></button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem
