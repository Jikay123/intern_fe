import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import produdct_1 from '../../Assets/images/product_1.jpg'
import produdct_2 from '../../Assets/images/product_2.jpg'
import produdct_3 from '../../Assets/images/product_3.jpg'
import produdct_4 from '../../Assets/images/product_4.jpg'
import produdct_5 from '../../Assets/images/product_5.jpg'
import produdct_6 from '../../Assets/images/product_6.jpg'
import produdct_8 from '../../Assets/images/product_8.png'
import produdct_9 from '../../Assets/images/product_9.png'
import nextIcon from '../../Assets/images/next.svg'
import prevIcon from '../../Assets/images/prev.svg'
import SpaceLine from '../../Common/spaceLine';
import ProductItem from '../Product/ProductItem';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="wrapIcon">
            <img
                alt=""
                src={nextIcon}
                className={className}
                style={{ ...style, display: "block", left: "100px", zIndex: "10", width: "45px", height: '30px' }}
                onClick={onClick}
            />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="wrapIcon">
            <img
                src={prevIcon}
                alt=""
                className={className}
                style={{ ...style, display: "block", right: "100px", zIndex: "10", width: "45px", height: '30px' }}
                onClick={onClick}
            />
        </div>
    );
}


const Bestseller = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 5,
        prevArrow: <SampleNextArrow className="iconNext" />,
        nextArrow: <SamplePrevArrow className="iconPrev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    prevArrow: <></>,
                    nextArrow: <></>,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: <></>,
                    nextArrow: <></>,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: <></>,
                    nextArrow: <></>,
                }
            }
        ]

        // slidesToScroll: 4
    };
    return (
        <div className="bestseller__product">

            <div className="bestseller__product--title">
                <Link className="wrapTitle__item">Sản phẩm mới</Link>
                <Link className="wrapTitle__item active">Sản phẩm bán chạy</Link>
                <Link className="wrapTitle__item">Sản phẩm đặc biệt</Link>
            </div>
            <SpaceLine marginRight={true} />
            <div className="bestseller__product--categories ">
                <ul className="categories--left">
                    <li><Link>Mỹ phẩm</Link></li>
                    <li><Link>Chăm sóc da</Link></li>
                    <li><Link>Dành cho tóc</Link></li>
                </ul>
                <ul className="categories--right">
                    <li><Link>Nước hoa</Link></li>
                    <li><Link>Trang sức</Link></li>
                    <li><Link>Quà tặng</Link></li>
                </ul>
            </div>
            <div className="slider__product">
                <Slider {...settings}>
                    <ProductItem type="small" img={produdct_2} />
                    <ProductItem type="small" img={produdct_3} />
                    <ProductItem type="small" img={produdct_1} />
                    <ProductItem type="small" img={produdct_4} />
                    <ProductItem type="small" img={produdct_5} />
                    <ProductItem type="small" img={produdct_6} />
                    <ProductItem type="small" img={produdct_8} />
                    <ProductItem type="small" img={produdct_9} />
                </Slider>

            </div>

        </div>
    )
}

export default Bestseller
