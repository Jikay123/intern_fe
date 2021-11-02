import React from "react";
import Slider from "react-slick";
import feedback_1 from '../../Assets/images/feedback_1--img.png'
import feedback_2 from '../../Assets/images/feedback_2--img.png'

export default function Feedback() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    };

    return (
        <div className="feedback">
            <div className="container">
                <Slider {...settings}>
                    <div className="feedback__item">
                        <img className="feedback__item--avatar img-fluid" src={feedback_1} alt="" />
                        <div className="row feedback__item--content">
                            <div className="col-sm-12 col-lg-8">
                                <div className="feedback__item--txt">
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </div>
                                <div className="feedback__info">
                                    <h6>
                                        TUTILE
                                        <span className="feedback__info--italic">
                                            Giám đốc phát triển sản phẩm
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__item">
                        <img className="feedback__item--avatar img-fluid" src={feedback_2} alt="" />
                        <div className="row feedback__item--content">
                            <div className="col-sm-12 col-lg-8">
                                <div className="feedback__item--txt">
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </div>
                                <div className="feedback__info">
                                    <h6>
                                        TUTILE
                                        <span className="feedback__info--italic">
                                            Giám đốc phát triển sản phẩm
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__item">
                        <img className="feedback__item--avatar img-fluid" src={feedback_1} alt="" />
                        <div className="row feedback__item--content">
                            <div className="col-sm-12 col-lg-8">
                                <div className="feedback__item--txt">
                                    "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto"
                                </div>
                                <div className="feedback__info">
                                    <h6>
                                        TUTILE
                                        <span className="feedback__info--italic">
                                            Giám đốc phát triển sản phẩm
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}