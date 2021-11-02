import React, { useState } from 'react';
import FeatureItem from './FeatureItem';
import HotProduct from './HotProduct';

import product_14 from '../../Assets/images/product_14.png'
import product_15 from '../../Assets/images/product_15.png'
import product_16 from '../../Assets/images/product_16.png'
import product_17 from '../../Assets/images/product_17.png'
import product_18 from '../../Assets/images/product_18.png'
import product_19 from '../../Assets/images/product_19.png'
import Reviews from './Reviews';

const Additination = () => {
    const [tabCurrent, setTabCurremt] = useState('feature');
    const handleChangeTab = (title) => {
        setTabCurremt(title)
    }

    return (
        <div className="row wrapAdditination">
            <div className="col-md-12 col-lg-9">
                {/* <div className="wrapTabs">
                    <ul className="nav nav-tabs">
                        <li className="nav-item feature">
                            <p onClick={() => setTabCurremt("feature")} className={`nav-link ${tabCurrent === 'feature' ? 'active' : ''}`} aria-current="page" href="#">Active</p>
                        </li>
                        <li className="nav-item infomation">
                            <p onClick={() => setTabCurremt("infomation")} className={`nav-link ${tabCurrent === 'infomation' ? 'active' : ''}`} href="#">Link</p>
                        </li>
                        <li className="nav-item reviews">
                            <p onClick={() => setTabCurremt("reviews")} className={`nav-link ${tabCurrent === 'reviews' ? 'active' : ''}`} href="#">Link</p>
                        </li>

                    </ul>
                </div> */}
                <ul className="wrapTabs nav nav-tabs" role="tablist">
                    <li className="tabs__item nav-item">
                        <a className="nav-link active" href="#feature" role="tab" data-toggle="tab">Đặc điểm nổi bật</a>
                    </li>
                    <li className="tabs__item nav-item">
                        <a className="nav-link " href="#infomation" role="tab" data-toggle="tab">Thông tin sản phẩm</a>
                    </li>
                    <li className="tabs__item nav-item">
                        <a className="nav-link" href="#reviews" role="tab" data-toggle="tab">Đánh giá</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane show fade active " id="feature">
                        <div className="wrapFeature">
                            <FeatureItem img={product_16} />
                            <FeatureItem img={product_17} type="reverse" />
                            <FeatureItem img={product_18} />
                            <FeatureItem type="reverse" />
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade " id="infomation">
                        <div className="wrapInfomation">
                            <img src={product_15} alt="" />
                            <p className="wrapInfomation__txt">Không thể phủ nhận, thời trang và phong cách chính là “tuyên ngôn” không lời mạnh mẽ nhất của mỗi người phụ nữ. Do đó, việc mua sắm thời trang trở thành niềm vui, và có khi là nguồn cảm hứng vô tận để phái đẹp sống vui, sống đẹp hơn trong mắt nửa còn lại của thế giới. Để F5 tủ đồ của mình trước những xu hướng ngày một đa dạng hơn trong thế giới thời trang, nhiều chị em không ngần ngại chi tiêu “mạnh tay” để sở hữu những món đồ yêu thích.</p>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="reviews">
                        <Reviews />
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-3">
                <HotProduct />
                <HotProduct title="SẢN PHẨM MUA NHIỀU" />
            </div>
        </div>
    )
}

export default Additination
