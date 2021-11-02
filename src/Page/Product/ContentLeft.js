import React, { useState } from 'react'

const ContentLeft = () => {
    const [expanded, setExpanded] = useState({
        cosmetics: false,
        jewels: false,
        accessory: false,
        perfume: false
    })
    const expandedInitial = {
        cosmetics: false,
        jewels: false,
        accessory: false,
        perfume: false
    }

    const handleResetCollaps = (id) => {
        const btnElement = document.querySelectorAll('.multi-collapse');
        console.log(btnElement, "12")
        btnElement.forEach(item => {
            if (item.id !== id)
                item.classList.remove('show');
        })
        switch (id) {
            case "cosmetics":
                setExpanded({
                    ...expandedInitial,
                    cosmetics: !expanded.cosmetics
                })
                break;
            case "jewels":
                setExpanded({
                    ...expandedInitial,
                    jewels: !expanded.jewels
                })
                break;
            case "accessory":
                setExpanded({
                    ...expandedInitial,
                    accessory: !expanded.accessory
                })
                break;
            default:
                setExpanded({
                    ...expandedInitial,
                    perfume: !expanded.accessory
                })
                break;
        }
    }
    return (
        <div className="content__left">
            <div className="categories">
                <div className="heading-secondary"><i className="fas fa-bars"></i> Danh mục sản phẩm</div>
                <div className="categories__collapse">
                    <div className="categories__title">
                        <a onClick={() => handleResetCollaps("cosmetics")} className="btn" data-toggle="collapse" href="#cosmetics" >
                            <span>mỹ phẩm</span> <i class={`fas fa-angle-down ${expanded.cosmetics ? 'active' : ''}`}></i> </a>
                    </div>
                    <div className="collapse multi-collapse" id="cosmetics">
                        <ul className="categorie__list">
                            <li>Sửa rửa mặt</li>
                            <li>Kem dưỡng da</li>
                            <li>Kem chống nắng</li>
                            <li>Son môi</li>
                        </ul>
                    </div>
                    <div className="categories__title">
                        <a onClick={() => handleResetCollaps("jewels")} className="btn " data-toggle="collapse" href="#jewels" >
                            <span>trang sức</span> <i className={`fas fa-angle-down ${expanded.jewels ? 'active' : ''}`}></i>
                        </a>
                    </div>
                    <div className="collapse multi-collapse" id="jewels">
                        <ul className="categorie__list">
                            <li>Vòng tay</li>
                            <li>Nhẫn</li>
                            <li>Lắc chân</li>
                            <li>Phụ kiện khác</li>
                            <li>Giày lưới các loại</li>
                        </ul>
                    </div>
                    <div className="categories__title">
                        <a onClick={() => handleResetCollaps("accessory")} className="btn " data-toggle="collapse" href="#accessory" >
                            <span>phụ kiện</span> <i className={`fas fa-angle-down ${expanded.accessory ? 'active' : ''}`}></i>
                        </a>
                    </div>

                    <div className="collapse multi-collapse" id="accessory">
                        <ul className="categorie__list ">
                            <li>Túi xách</li>
                            <li>Đồng hồ</li>
                        </ul>
                    </div>
                    <div className="categories__title">
                        <a onClick={() => handleResetCollaps("perfume")} className="btn" data-toggle="collapse" href="#perfume" >
                            <span>Nước hoa</span> <i className={`fas fa-angle-down  ${expanded.perfume ? 'active' : ''}`}></i>
                        </a>
                    </div>
                    <div className="collapse multi-collapse" id="perfume">
                        <ul className="categorie__list ">
                            <li>Nước hoa Việt Nam</li>
                            <li>Nước hoa Mỹ</li>
                            <li>Nước hoa Pháp</li>
                            <li>Nước hoa Nhật</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="compare">
                <p className="compare__title">So sánh sản phẩm</p>
                <p className="compare__description">Bạn chưa có sản phẩm nào để so sánh</p>
            </div>
            <div className="tags">
                <p className="tags__title">Tag sản phẩm</p>
                <ul className="tags__list">
                    <li>Hoa tai</li>
                    <li>Son</li>
                    <li>Nước hoa</li>
                    <li>Giày</li>
                    <li>Sandal</li>
                    <li>Áo sơ mi</li>
                    <li>Nước hoa</li>
                    <li>Trẻ em</li>
                    <li>Nước hoa</li>
                    <li>Trẻ em</li>
                </ul>
            </div>
            <div className="store">
                <p className="store__name">Mandala store</p>
            </div>
        </div>
    )
}

export default ContentLeft
