import React from 'react'
import { Link } from 'react-router-dom'
import imgNotFound from '../Assets/images/404.png'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="container">
                <img className="img-fluid" src={imgNotFound} alt="img" />
                <div className="notFound__title">Đây không phải là trong web bạn đang tìm kiếm</div>
                <div className="wrapSearch">
                    <input className="notFound__input" />
                    <i className="fa fa-search icon" />
                </div>
                <div className="wrapMenu">
                    <p className="menu__item"><Link to="/contact" >Liên hệ</Link></p>
                    <p className="menu__item"><Link to="/">Trang chủ</Link></p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
