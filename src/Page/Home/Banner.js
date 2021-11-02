import React from 'react'
import Layer from '../../Assets/images/Layer.png'
import Layer_product_new from '../../Assets/images/Layer_product_new.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 ">
                        <div className="banner__left">
                            <img className="imgProductBanner img-fluid" src={Layer_product_new} alt="" />
                            <div className="infoProductBanner">
                                <p className="infoProductBanner--name">GreenVera</p>
                                <div className="wrapperInfoMore">
                                    <p className="wrapperInfoMore--description">Sản phẩm tinh dầu dưỡng da mới nhất của Mandala</p>
                                    <p className="wrapperInfoMore--price">GIÁ CHỈ 750.000 <span className="price__icon">đ</span></p>
                                    <button className="button__order" >Mua hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner__layer">
                            <img className="banner__layer-img" src={Layer} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
