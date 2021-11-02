import React from 'react'
import iconPlane from '../../Assets/images/plane.svg'
import iconGift from '../../Assets/images/gift.svg'
import iconStar from '../../Assets/images/star.svg'
import mother_1 from '../../Assets/images/item-mother-1.png'
import mother_2 from '../../Assets/images/item-mother-2.png'
import mother_3 from '../../Assets/images/item-mother-3.png'
import mother_4 from '../../Assets/images/item-mother-4.png'
import itemRight_1 from '../../Assets/images/item_2--right--img.png'
import itemRight_2 from '../../Assets/images/Item_3--left--img.jpg'



const Content = () => {
    return (
        <div className="wrapContent">
            <div className="fact">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 fact__item">
                            <img src={iconPlane} alt="iconPlane" />
                            <p className="fact__item--txt">Miễn phí vận chuyển trên toàn quốc</p>
                        </div>
                        <div className="col-xs-12 col-sm-4 fact__item">
                            <img src={iconGift} alt="iconPlane" />
                            <p className="fact__item--txt">Tặng ngay quà tặng trị giá 350.000đ</p>
                        </div>
                        <div className="col-xs-12 col-sm-4 fact__item">
                            <img src={iconStar} alt="iconPlane" />
                            <p className="fact__item--txt">Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className=" products__ads d-flex">
                            <div className="products__ads--couple">
                                <div className="mb-1">
                                    <img className="img-fluid" src={mother_1} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={mother_2} alt="" />
                                </div>
                            </div>
                            <div className="ml-2">
                                <img className="products__ads--alone img-fluid " src={itemRight_1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="products__ads d-flex flex-row-reverse ">
                            <div className="products__ads--couple">
                                <div className="mb-1 ">
                                    <img className="img-fluid" src={mother_3} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={mother_4} alt="" />
                                </div>
                            </div>
                            <div className="mr-2">
                                <img className="products__ads--alone img-fluid " src={itemRight_2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
