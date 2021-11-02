import React from 'react'
import product1 from '../../Assets/images/product_10.png'

const FeatureItem = ({ type, img }) => {
    console.log(type)
    return (
        <div className={` row wrapFeature__item  ${type === 'reverse' ? 'reverse' : ''}`}>
            <div className="wrapFeature__item--txt col-md-12 col-lg-8">
                <p className="txtTitle">
                    THE MARK OF A LEGEND
                </p>
                <p className="txtDescription ">
                    Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.
                </p>
            </div>
            <div className="wrapFeature__item--img col-md-12 col-lg-4">
                <img src={img ? img : product1} alt="" />
            </div>
        </div>
    )
}

export default FeatureItem
