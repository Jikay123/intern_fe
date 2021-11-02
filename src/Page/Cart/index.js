import React from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import cart_product_1 from '../../Assets/images/cart_product_1.png';

const Cart = () => {

    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <div className="breadCrumb__item">
                        Home <i className="fa fa-angle-right" />
                    </div>
                    <div className="breadCrumb__item active">Cart</div>
                </div>
                <div className="wrapCartList">
                    <p className="title">Giỏ hàng</p>
                    <table className="wrapTableCart">
                        <thead>
                            <tr>
                                <th colSpan={3}>Ảnh</th>
                                <th colSpan={6}>Tên sản phẩm</th>
                                <th colSpan={2}>Giá</th>
                                <th colSpan={2}>Số lượng</th>
                                <th colSpan={2}>Tổng số</th>
                                <th colSpan={1}>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3} className="product__image">
                                    <img src={cart_product_1} alt="" />
                                </td>
                                <td colSpan={6} className="product__name">lắc tay D&G</td>
                                <td colSpan={2} className="product__price">345.000 <span className="unit">đ</span></td>
                                <td colSpan={2} className="product__quantity">1</td>
                                <td colSpan={2} className="product__total">345.000 <span className="unit">đ</span></td>
                                <td colSpan={1} className="btn__remove">
                                    <button><i className="fa fa-trash" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="product__image">
                                    <img src={cart_product_1} alt="" />
                                </td>
                                <td colSpan={6} className="product__name">lắc tay D&G</td>
                                <td colSpan={2} className="product__price">345.000 <span className="unit">đ</span></td>
                                <td colSpan={2} className="product__quantity">1</td>
                                <td colSpan={2} className="product__total">345.000 <span className="unit">đ</span></td>
                                <td colSpan={1} className="btn__remove">
                                    <button><i className="fa fa-trash" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="wrapTableCart mobile" >
                        <tbody>
                            <tr style={{ width: '100%' }} className="contentItem" >
                                <th colSpan={3} style={{ width: "20%" }} >
                                    Ảnh
                                </th>
                                <td colSpan={6} style={{ width: "30%" }}>
                                    <img src={cart_product_1} alt="" />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Tên sản phẩm</th>
                                <td colSpan={6} className="product__name">lắc tay D&G</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Giá</th>
                                <td colSpan={6} className="product__price">345.000 <span className="unit">đ</span></td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Số lượng</th>
                                <td colSpan={6} className="product__quantity">1</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Tổng số</th>
                                <td colSpan={6} className="product__total">345.000 <span className="unit">đ</span></td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Xóa</th>
                                <td colSpan={6} className="btn__remove">
                                    <button><i className="fa fa-trash" /></button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr style={{ width: '100%' }} className="contentItem" >
                                <th colSpan={3} style={{ width: "24%" }} >
                                    Ảnh
                                </th>
                                <td colSpan={6} style={{ width: "100%" }}>
                                    <img src={cart_product_1} alt="" />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Tên sản phẩm</th>
                                <td colSpan={6} className="product__name">lắc tay D&G</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Giá</th>
                                <td colSpan={6} className="product__price">345.000 <span className="unit">đ</span></td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Số lượng</th>
                                <td colSpan={6} className="product__quantity">1</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Tổng số</th>
                                <td colSpan={6} className="product__total">345.000 <span className="unit">đ</span></td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Xóa</th>
                                <td colSpan={6} className="btn__remove">
                                    <button><i className="fa fa-trash" /></button>
                                </td>
                            </tr>

                        </tbody>
                        {/* <tr style={{ width: '100%' }}> */}

                    </table>
                    <div className="wrapButton">
                        <button className="wrapButton__item">Tiếp tục mua hàng</button>
                        <button className="wrapButton__item">Xóa</button>
                        <button className="wrapButton__item">Cập nhật</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
