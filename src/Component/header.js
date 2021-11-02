import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../Assets/images/logo.png'
import product from '../Assets/images/product.png'

const Header = () => {
    const [showbar, setShowbar] = useState(false);
    const history = useHistory()
    return (
        <div className="header">
            <div className="container">
                <img onClick={() => history.push('/')} className="logo" src={logo} alt="logo" />
                <ul className={`header__navListMenu ${showbar === true ? 'active' : ''}`}>
                    <li><Link to='/'>Trang chủ</Link></li>
                    <li><Link to="/introduce">Giới thiệu</Link></li>
                    <li className="navItem__dropdown">
                        <Link to="/product" >Sản phẩm</Link> <i class="fas fa-angle-down"></i>
                        <div className="navItem__dropdown--list">
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <p className="dropDown__item--title">Dưỡng da</p>
                                    <ul className="dropDown__item--detail">
                                        <li ><Link to="/product-detail" >Áo khoác</Link></li>
                                        <li ><Link to="/product-detail">Bộ áo liền quần</Link></li>
                                        <li ><Link to="/product-detail">Dresses</Link></li>
                                        <li ><Link to="/product-detail">Quần / Váy</Link></li>
                                        <li ><Link to="/product-detail">Quần short</Link></li>
                                        <li ><Link to="/product-detail">Quần jean</Link></li>
                                        <li ><Link to="/product-detail">Đồ đan</Link></li>
                                        <li ><Link to="/product-detail">Áo nỉ</Link></li>

                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <p className="dropDown__item--title">Nước hoa</p>
                                    <ul className="dropDown__item--detail">
                                        <li ><Link to="/product-detail">Áo khoác</Link></li>
                                        <li ><Link to="/product-detail">Bộ áo liền quần</Link></li>
                                        <li ><Link to="/product-detail">Dresses</Link></li>
                                        <li ><Link to="/product-detail">Quần / Váy</Link></li>
                                        <li ><Link to="/product-detail">Quần short</Link></li>
                                        <li ><Link to="/product-detail">Quần jean</Link></li>
                                        <li ><Link to="/product-detail">Đồ đan</Link></li>
                                        <li ><Link to="/product-detail">Áo nỉ</Link></li>

                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <p className="dropDown__item--title">Trang sức</p>
                                    <ul className="dropDown__item--detail">
                                        <li ><Link to="/product-detail">Áo khoác</Link></li>
                                        <li ><Link to="/product-detail">Bộ áo liền quần</Link></li>
                                        <li ><Link to="/product-detail">Dresses</Link></li>
                                        <li ><Link to="/product-detail">Quần / Váy</Link></li>
                                        <li ><Link to="/product-detail">Quần short</Link></li>
                                        <li ><Link to="/product-detail">Quần jean</Link></li>
                                        <li ><Link to="/product-detail">Đồ đan</Link></li>
                                        <li ><Link to="/product-detail">Áo nỉ</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li> <Link to="/blog">Tin tức</Link></li>
                    <li><Link to="/map">Bản đồ</Link></li>
                    <li><Link to="/contact">Liên hệ</Link></li>
                </ul>
                <div className="header__navListIcon">
                    <ul>
                        <li className="btn__iconCart">
                            <Link to="/cart"><i class="fas fa-shopping-cart">
                            </i></Link>
                            <div className="navItem__dropdown--list cart">
                                <div className="wrapCartProduct">
                                    <div className="wrapProductItem">
                                        <img src={product} alt="" />
                                        <div className="wrapProductItem__info">
                                            <p className="title">Áo sơ mi Nam</p>
                                            <p className="price">120.000 <span className="unit">đ</span></p>
                                        </div>
                                        <div><i className="fa fa-remove" /></div>
                                    </div>
                                    <div className="wrapProductItem">
                                        <img src={product} alt="" />
                                        <div className="wrapProductItem__info">
                                            <p className="title">Áo sơ mi Nam</p>
                                            <p className="price">120.000 <span className="unit">đ</span></p>
                                        </div>
                                        <div><i className="fa fa-remove" /></div>
                                    </div>
                                </div>
                                <div className="cart__total">
                                    <div className="wrapPriceTotal">
                                        <span>Tổng số: </span>
                                        <span className="price">240.000<span className="unit">đ</span></span>
                                    </div>
                                    <button className="btn__cart" onClick={() => history.push('/cart')}>Giỏ hàng</button>
                                </div>

                            </div>
                        </li>
                        <li><i class="fas fa-search"></i></li>
                        <li onClick={() => setShowbar(!showbar)} className="iconBars">
                            <i className="fas fa-bars"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
