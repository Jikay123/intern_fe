/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'


const Contact = () => {

    const handleSubmitForm = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="breadCrumb">
                    <div className="breadCrumb__item">Home <i className="fa fa-angle-right"></i></div>
                    <div className="breadCrumb__item active">Liên hệ</div>
                </div>
                <div className="wrapContact">
                    <p className="wrapContact__title">Liên hệ</p>
                    <div className="row wrapContact__content">
                        <div className="col-md-12 col-lg-6 wrapContact__content--left">
                            <iframe
                                className="wrapMap"
                                width="100%"
                                height={400}
                                src="https://maps.google.com/maps?q=150+Duy+Tân,+Hòa+Thuận+Nam,+Hải+Châu,+Đà+Nẵng+550000,+Việt+Nam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 wrapContact__content--right">
                            <form className="form__contact" onSubmit={handleSubmitForm}>
                                <p className="form__title">GỬI EMAIL CHO CHÚNG TÔI</p>
                                <div className="form__input">
                                    <p className="input__label">Tên *</p>
                                    <input className="input__content" />
                                </div>
                                <div className="form__input">
                                    <p className="input__label">Email *</p>
                                    <input className="input__content" />
                                </div>
                                <div className="form__input">
                                    <p className="input__label">Lời nhắn *</p>
                                    <textarea className="input__content textarea" />
                                </div>
                                <div className="wrapButtonSend">
                                    <button className="button__send">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
