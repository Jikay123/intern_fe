import React from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import imageIntroduce from '../../Assets/images/about.png'
import logo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom'

const Introduce = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <div className="breadCrumb__item">
                        Home &nbsp;<i className="fa fa-angle-right"></i>
                    </div>
                    <div className="breadCrumb__item active">
                        Về với chúng tôi
                    </div>
                </div>
                <div id="introduce" className="introduce">
                    <p className="introduce__title">VỀ CHÚNG TÔI</p>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 introduce__left">
                            <img className="img-fluid" src={imageIntroduce} alt="" />
                        </div>
                        <div className="col-md-12 col-lg-6 introduce__right">
                            <img src={logo} alt="" />
                            <p className="txtTitle">
                                GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA
                            </p>
                            <p className="txtDescription">
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <Link className="txtLink" to="/introduce">Xem thêm</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Introduce
