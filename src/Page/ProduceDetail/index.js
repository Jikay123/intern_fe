import React from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import Additination from './Additination'
import MainContent from './MainContent'

const ProductDetail = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <div className="breadCrumb__item">Home <i className="fa fa-angle-right" /></div>
                    <div className="breadCrumb__item">Sản phẩm <i className="fa fa-angle-right" /></div>
                    <div className="breadCrumb__item">Trang sức <i className="fa fa-angle-right" /></div>
                    <div className="breadCrumb__item active">Lách tay </div>
                </div>
                <MainContent />
                <Additination />


            </div>
            <Footer />
        </>
    )
}

export default ProductDetail
