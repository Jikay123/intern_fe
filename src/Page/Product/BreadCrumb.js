import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
    return (
        <div>
            <div className="breadCrumb">
                <Link to="/" className="breadCrumb__item">
                    Home &gt;
                </Link>
                <Link to="/product" className="breadCrumb__item">
                    Sản phẩm &gt;
                </Link>
                <p className="breadCrumb__item active">
                    Trang sức
                </p>
            </div>
        </div>
    )
}

export default BreadCrumb
