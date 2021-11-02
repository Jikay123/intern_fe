import React, { useEffect, useState } from 'react'
import product_10 from '../../Assets/images/product_10.png'
import product_11 from '../../Assets/images/product_11.png'
import product_12 from '../../Assets/images/product_12.png'
import product_13 from '../../Assets/images/product_13.png'
import product_14 from '../../Assets/images/product_14.png'
import product_15 from '../../Assets/images/product_15.png'
import product_16 from '../../Assets/images/product_16.png'
import product_17 from '../../Assets/images/product_17.png'
import product_18 from '../../Assets/images/product_18.png'
import product_19 from '../../Assets/images/product_19.png'


const MainContent = () => {
    const [currentImage, setCurentImage] = useState(product_10);
    const [currentListImage, setCurrentListImage] = useState({
        start: 0,
        end: 4,
    })
    console.log({ currentListImage })
    const [productImageData, setProductImageData] = useState([
        product_10, product_11, product_12, product_13, product_14, product_15, product_16, product_17, product_18, product_19
    ])

    const handleMoveUp = () => {
        if (currentListImage.start <= 0) return;
        setCurrentListImage({
            start: currentListImage.start - 1,
            end: currentListImage.end - 1
        })
    }
    const handleMoveDown = () => {
        if (currentListImage.end > productImageData.length - 1) return;
        setCurrentListImage({
            start: currentListImage.start + 1,
            end: currentListImage.end + 1
        })
    }

    const handleChangeImageCurrent = (url) => {
        setCurentImage(url);
    }

    const handleShowinfo = (name) => {
        const txtElementList = document.querySelectorAll('.txt');
        txtElementList.forEach((item) => {
            item.innerHTML = ``;
        })
        const txtElement = document.querySelector(`.txt.${name}`)
        txtElement.innerHTML =
            `
            <div class="wrapTxt">
                <i class="fas fa-caret-left"></i>
                <span>1k</span>
            </div>
        `
        setTimeout(() => {
            txtElement.innerHTML = ``
        }, 2000)
        console.log(txtElement)
    }


    return (
        <div className="row wrapMainContent">
            <div className="col-md-12 col-lg-7">
                <div className="wrapImageProduct">
                    <div className="wrapImageProduct__listDetail">
                        <div className="wrapButton">
                            <div className="sliderImage__control" onClick={handleMoveUp}><i className="fa fa-arrow-up" /></div>
                        </div>
                        <div className="wrapListImageDetail">
                            {productImageData.slice(currentListImage.start, currentListImage.end).map((item, index) => (
                                <div className="wrapImageItem" key={index}>
                                    <img className={`imageItem ${currentImage === item ? 'active' : ''}`} onMouseMove={() => handleChangeImageCurrent(item)} onClick={() => handleChangeImageCurrent(item)} src={item} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="wrapButton">
                            <div className="sliderImage__control" onClick={handleMoveDown}><i className="fa fa-arrow-down" /></div>
                        </div>
                    </div>
                    <div className="wrapImageProduct__feature">
                        <img className="image__feature" src={currentImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-5">
                <div className="wrapInfoBasic">
                    <p className="wrapInfoBasic__title">LẮC TAY TYFFANY XU HƯỚNG MỚI NHẤT</p>
                    <p className="wrapInfoBasic__name" >TYFFANY MS 3201</p>
                    <div className="wrapInfoBasic__price" >
                        <p className="price__new">950.000 <span className="unit">đ</span></p>
                        <p className="price__old">999.000 <span className="unit">đ</span></p>
                    </div>
                    <p className="wrapInfoBasic__description">
                        Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu những món đồ yêu thích.
                    </p>
                    <div className="wrapSelected color">
                        <p className="selected__title">Màu sắc</p>
                        <select class="form-select " >
                            <option className="select__option" selected>Chọn màu</option>
                            <option className="select__option" value="1">Màu đồng</option>
                            <option className="select__option" value="2">Màu bạc</option>
                            <option className="select__option" value="3">Màu vàng</option>
                        </select>
                    </div>
                    <div className="wrapSelected size">
                        <p className="selected__title">Size</p>
                        <select class="form-select" >
                            <option className="select__option" selected>Chọn Size</option>
                            <option className="select__option" value="1">12</option>
                            <option className="select__option" value="2">13</option>
                            <option className="select__option" value="3">14</option>
                        </select>
                    </div>
                    <div className="wrapInputQuatity">
                        <p className="input__title">Số lượng</p>
                        <input className="input__value" type="number" min={1} max={100} defaultValue={1} />
                    </div>
                    <div className="wrapListButton show">
                        <button className="order">Mua hàng</button>
                        <button className="favorite"><i className="fa fa-heart"></i></button>
                        <button className="ellipsis"><i class="fas fa-ellipsis-v"></i></button>
                    </div>
                    <div className="wrapSocial">
                        <p className="wrapSocial--txt">
                            Shipping & <span className="txtHightlight">Returns</span>
                        </p>
                        <button onClick={() => handleShowinfo('facebook')} className="wrapSocial__item facebook">
                            <i className="fa fa-facebook-square" />
                            <span>Like</span>
                        </button>
                        <span className="txt facebook">

                        </span>
                        <button onClick={() => handleShowinfo('twitter')} className="wrapSocial__item twitter">
                            <i className="fa fa-twitter-square" />
                            <span>Twitter</span>

                        </button>
                        <span className="txt twitter"></span>

                        <button onClick={() => handleShowinfo('google')} className="wrapSocial__item google">
                            <i className="fa fa-google-plus-g" />
                            <span>1</span>

                        </button>
                        <span className="txt google"></span>
                        <button className="wrapSocial__item linkedin">
                            <i className="fa fa-linkedin" />
                            <span>Share</span>
                        </button>
                        <button className="wrapSocial__item pinterest">
                            <i className="fa fa-pinterest" />
                            <span>In it</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
