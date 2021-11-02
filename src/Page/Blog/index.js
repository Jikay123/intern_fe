import React, { useEffect, useState } from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import ControlBar from '../Product/ControlBar'
import blog_1 from '../../Assets/images/blog_1.png'
import blog_2 from '../../Assets/images/blog_2.png'
import blog_3 from '../../Assets/images/blog_3.png'
import blog_4 from '../../Assets/images/blog_4.png'
import blog_5 from '../../Assets/images/blog_5.png'
import blog_6 from '../../Assets/images/blog_6.png'
import blog_7 from '../../Assets/images/blog_7.png'
import blog_8 from '../../Assets/images/blog_8.png'
import blog_9 from '../../Assets/images/blog_9.png'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [dataDisplay, setDataDisplay] = useState([]);
    const [blogData, setBlogData] = useState([blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_7, blog_8, blog_9,
        blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_7, blog_8, blog_9]);

    const [number, setNumber] = useState(0);
    const [countPage, setCountPage] = useState(blogData.length / 6);
    const handeSetNumber = (select) => {
        setNumber(select);
    }

    const pageSize = 6;
    const dataCurrent = number * pageSize;
    useEffect(() => {
        setDataDisplay(blogData.slice(dataCurrent, dataCurrent + pageSize))
    }, [number, dataCurrent, blogData])

    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <p className="breadCrumb__item">
                        Home &gt;
                    </p>
                    <p className="breadCrumb__item active">
                        Blog
                    </p>
                </div>
                <div className="wrapBlog">
                    <p className="blog__title">Blog</p>
                    <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} />
                    <div className="row blog__list">
                        {dataDisplay.map((item, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-4 blog__item">
                                <img className="blog__item--image" src={item} alt="" />
                                <p className="blog__item--title">REVIEW SON KEM BOURJOIS VELVET</p>
                                <div className="blog__item--description">
                                    <p className="description__content">
                                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                                    </p>
                                    <p className="description__auth">
                                        Bởi NamTran (27 / 05 / 2015)
                                    </p>
                                </div>
                                <div className="wrapReadMore">
                                    <p><Link>Xem thêm &nbsp;<i className="fa fa-angle-right"></i></Link></p>
                                    <p>23 bình luận</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
