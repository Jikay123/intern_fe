import React from 'react'
import iconMap from '../Assets/images/map.svg';
import iconPhone from '../Assets/images/phone.svg';
import iconFax from '../Assets/images/fax.svg';
import iconEmail from '../Assets/images/email.svg';
import footer_extend from '../Assets/images/footer_extend.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-lg-4 footer__contact">
                        <p className="footer__contact--title">LIÊN HỆ VỚI CHÚNG TÔI</p>
                        <ul className="footer__contact--list">
                            <li className="footer__contact--item address">
                                <Link className="d-flex wrapperItem">
                                    <img src={iconMap} alt="iconMap" />
                                    <span>Tầng 4, tòa nhà Hanoi Group Số 442 Đội Cấn, P.Cống Vị, Q. Ba Đình, Hà Nội</span>
                                </Link>
                            </li>
                            <li className="d-flex footer__contact--item">
                                <Link className="d-flex wrapperItem">
                                    <img src={iconPhone} alt="iconPhone" />
                                    <span>(04) 6674 2332 </span>
                                </Link>
                                <span className="space-line">&nbsp;-&nbsp;</span>
                                <Link className="d-flex wrapperItem">
                                    <img src={iconFax} alt="iconFax" />
                                    <span>(04) 3786 8904</span>
                                </Link>
                            </li>
                            <li className="d-flex footer__contact--item ">
                                <Link className="d-flex wrapperItem">
                                    <img src={iconPhone} alt="" />
                                    <span>(04) 6680 9686 </span>
                                </Link>
                                <Link className="d-flex wrapperItem">
                                    <img src={iconEmail} alt="" />
                                    <span>Support@bizweb.vn</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2 footer__contact shopping">
                        <p className="footer__contact--title">Chuyển hàng</p>
                        <ul className="footer__contact--list">
                            <li><Link>Mua sắm trực tuyến</Link></li>
                            <li><Link>Đến từ chúng tôi gửi đến</Link></li>
                            <li><Link>Chính sách vận chuyển</Link></li>
                            <li><Link>Vận chuyển thông tin</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2 footer__contact support">
                        <p className="footer__contact--title">Hỗ trợ</p>
                        <ul className="footer__contact--list">
                            <li><Link>Câu chuyện của chúng tôi</Link></li>
                            <li><Link>Thanh toán an toàn</Link></li>
                            <li><Link>Tùy chọn vận chuyển</Link></li>
                            <li><Link>Chính sách vận chuyển</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2 footer__contact infomation">
                        <p className="footer__contact--title">THÔNG TIN</p>
                        <ul className="footer__contact--list">
                            <li><Link>Về chúng tôi</Link></li>
                            <li><Link>Điều khoản & Điều kiện</Link></li>
                            <li><Link>Chính sách riêng tư</Link></li>
                            <li><Link>Đơn đặt hàng và returns</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-2 footer__contact account">
                        <p className="footer__contact--title">MY ACCOUNT</p>
                        <ul className="footer__contact--list">
                            <li><Link>Xem giỏ hàng</Link></li>
                            <li><Link>Sản phẩm yêu thích</Link></li>
                            <li><Link>Kiểm tra</Link></li>
                            <li><Link>Theo dõi đặt hàng của tôi</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-8 wrapperCopyright">
                        <p className="footer__extend">© Copyright 2008-2014 DKT Technology JSC</p>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <img src={footer_extend} alt="footer_extend" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
