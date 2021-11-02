import React from 'react'
import auth from '../../Assets/images/auther.jpg'

const Reviews = () => {
    const random = () => {
        let number = Math.floor(Math.random() * (10000 - 1) + 1);
        return number;
    }
    return (
        <div className="wrapReviews">
            <p className="wrapReviews__title">
                HÃY ĐỂ LẠI NHẬN XÉT CỦA BẠN
            </p>
            <div className="wrapFormReview">
                <div className="wrapRating">
                    <span className="wrapStars"> {Array(5).fill("_").map((item, index) => (
                        <p key={index + random()}><i className="fa fa-star" style={{ color: "#ccc" }} /></p>
                    ))}</span>
                </div>
                <p className="wrapFormReview__title">
                    Nội dung:
                </p>
                <textarea />
                <button className="btnSend">Nhận xét</button>
            </div>
            <p className="wrapReviews__title">
                Nhận xét gần đây
            </p>
            <div className="wrapReviews__list">
                <div className="wrapReviews__item">
                    <div className="wrapContent">
                        <p className="wrapContent__ProductName">LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</p>
                        <p className="wrapContent__rating">
                            <span className="wrapStars"> {Array(5).fill("_").map((item, index) => (
                                <p key={index + random()}><i className="fa fa-star" style={{ color: "yellow" }} /></p>
                            ))}</span>
                        </p>
                    </div>
                    <div className="auth">
                        <p className="auth__info">
                            Nhận xét bởi <span className="info__Name">Thùy Trúc</span> vào ngày 18-8-2020
                        </p>
                        <div className="auth__content">
                            <img src={auth} alt="" />
                            <p>Đẹp lắm luôn!!</p>
                        </div>
                    </div>
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default Reviews
