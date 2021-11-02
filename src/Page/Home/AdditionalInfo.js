import React from 'react'
import iconFacebook from '../../Assets/images/facebook.svg'
import iconTwitter from '../../Assets/images/twitter.svg'
import iconInstagram from '../../Assets/images/instagram.svg'
import iconGoogle from '../../Assets/images/google.svg'
import iconPinterest from '../../Assets/images/pinterest.svg'
import iconLinkedin from '../../Assets/images/linkedin.svg'
import Slider from 'react-slick'
import SpaceLine from '../../Common/spaceLine'
import logo from '../../Assets/images/logo.png'
import blog_2 from '../../Assets/images/blog_2.png'
import { Link } from 'react-router-dom'


const AdditionalInfo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            }
        ]
    };
    return (
        <div className="addtional__infomation">
            <div className="container">
                <div className="slider__contact">
                    <Slider {...settings}>
                        <div className="contact__item">
                            <img src={iconFacebook} alt="" />
                            <p className="txt">Facebook</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconTwitter} alt="" />
                            <p className="txt">Twitter</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconInstagram} alt="" />
                            <p className="txt">Instagram</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconGoogle} alt="" />
                            <p className="txt">Google</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconPinterest} alt="" />
                            <p className="txt">Pinterest</p>
                        </div>
                        <div className="contact__item">
                            <img src={iconLinkedin} alt="" />
                            <p className="txt">Linkedin</p>
                        </div>
                    </Slider>
                </div>
                <div className="row ">
                    <div className="col-md-6 col-lg-4">
                        <div className="about__item">
                            <p className="about__item--title">Về với chúng tôi</p>
                            <SpaceLine />
                            <div className="about__item--content">
                                <img src={logo} alt="" />
                                <h3>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</h3>
                                <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>

                                <Link to="/" className="seeMore">Xem thêm</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="about__item">
                            <p className="about__item--title">Blog</p>
                            <SpaceLine />
                            <div className="about__item--content blog">
                                <div className="wrapImg">
                                    <img className="img-fluid img__blog" src={blog_2} alt="" />
                                </div>
                                <h3>REVIEW SON KEM BOURJOIS VELVET</h3>
                                <div className="wrapContent">
                                    <p className="wrapContent__main">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                                    <Link className="wrapContent__info">Bởi NamTran (27/05/2015)</Link>
                                </div>
                                <div className="wrapDetail">
                                    <Link className="seeMore">
                                        Xem thêm <i className="fas fas-angle-down"></i>
                                    </Link>
                                    <Link className="commentCount">
                                        23 bình luận
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="about__item">
                                    <p className="about__item--title">GỬI EMAIL CHO CHÚNG TÔI</p>
                                    <SpaceLine />
                                    <div className="wrapContact__form">
                                        <input className="inputEmail" type="text" placeholder="Email của bạn" />
                                        <p className="description">Gửi email để nhận những ưu đãi mới nhất</p>
                                        <button className="buttonSend">Gửi</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12">
                                <div className="about__item">
                                    <p className="about__item--title">TAG SẢN PHẨM</p>
                                    <SpaceLine />
                                    <ul className="listTags">
                                        <li><Link>Đồng hồ</Link></li>
                                        <li><Link>Túi</Link></li>
                                        <li><Link>Phụ kiện</Link></li>
                                        <li><Link>Giày</Link></li>
                                        <li><Link>Áo sơ mi</Link></li>
                                        <li><Link>Sandal</Link></li>
                                        <li><Link>Nước hoa</Link></li>
                                        <li><Link>Trẻ em</Link></li>
                                        <li><Link>Sandal</Link></li>
                                        <li><Link>Nước hoa</Link></li>
                                        <li><Link>Trẻ em</Link></li>
                                        <li><Link>Nước hoa</Link></li>
                                        <li><Link>Trẻ em</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo
