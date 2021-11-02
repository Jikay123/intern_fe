import React from 'react'
import Footer from '../../Component/footer'
import Header from '../../Component/header'
import AdditionalInfo from './AdditionalInfo'
import Banner from './Banner'
import Bestseller from './Bestseller'
import Content from './Content'
import Feedback from './Feedback'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Content />
            <Feedback />
            <Bestseller />
            <AdditionalInfo />
            <Footer />
        </>
    )
}

export default Home
