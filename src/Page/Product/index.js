import React from 'react';
import Footer from '../../Component/footer';
import Header from '../../Component/header';
import Banner from './Banner';
import BreadCrumb from './BreadCrumb';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const Product = () => {
    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumb />
            </div>
            <Banner />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3">
                        <ContentLeft />
                    </div>
                    <div className="col-md-12 col-lg-9">
                        <ContentRight />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product
