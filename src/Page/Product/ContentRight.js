import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import product1 from '../../Assets/images/product_1.jpg'
import product2 from '../../Assets/images/product_2.jpg'
import product3 from '../../Assets/images/product_3.jpg'
import product4 from '../../Assets/images/product_4.jpg'
import product5 from '../../Assets/images/product_5.jpg'
import product6 from '../../Assets/images/product_6.jpg'
import product8 from '../../Assets/images/product_8.png'
import product9 from '../../Assets/images/product_9.png'
import ControlBar from './ControlBar';

const ContentRight = () => {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(0);
    const [countPage, setCountPage] = useState(0)
    const handleSetShow = (type) => {
        type === true ? setShow(true) : setShow(false);
    }
    const [productData, setProductData] = useState([
        { image: product1, title: "OHUI" },
        { image: product2, title: "HOME" },
        { image: product3, title: "DEBORA" },
        { image: product9, title: "OHUI" },
        { image: product2, title: "HOME" },
        { image: product3, title: "DEBORA" },
        { image: product1, title: "OHUIAAAA" },
        { image: product8, title: "HOME" },
        { image: product9, title: "DEBORA" },
        { image: product1, title: "OHUI" },
        { image: product2, title: "HOME" },
        { image: product8, title: "DEBORA" },
        { image: product1, title: "OHUIBBBB" },
        { image: product2, title: "HOME" },
        { image: product8, title: "DEBORA" },
        { image: product9, title: "OHUI" },
        { image: product2, title: "HOME" },
        { image: product3, title: "DEBORA" },
        { image: product8, title: "OHUICCCC" },
        { image: product2, title: "HOME" },
        { image: product3, title: "DEBORA" },
        { image: product9, title: "OHUI" },
        { image: product2, title: "HOME" },
        { image: product8, title: "DEBORA" },
    ]);
    const [dataDisplay, setDataDisplay] = useState([])
    const pageSize = 6;
    const pageSizeList = 3;
    const dataCurrent = number * pageSize;
    const dataCurrenttList = number * pageSizeList;

    useEffect(() => {
        if (show === true) {
            setCountPage(productData.length / 3)
            setDataDisplay(productData.slice(dataCurrenttList, dataCurrenttList + pageSizeList))
        } else {
            setCountPage(productData.length / 6);
            setDataDisplay(productData.slice(dataCurrent, dataCurrent + pageSize))
        }

    }, [show, dataCurrenttList, productData, dataCurrent])


    const handeSetNumber = (selected) => {
        setNumber(selected);
    }
    return (
        <div className="content__right">
            <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} show={show} handleSetShow={handleSetShow} />
            <div className={`row product__list ${show ? 'show' : ''}`}>
                {dataDisplay.map((item, index) => (
                    <ProductItem key={index} show={show} img={item.image} title={item.title} />
                ))}
            </div>
            <ControlBar countPage={countPage} handeSetNumber={handeSetNumber} number={number} show={show} handleSetShow={handleSetShow} />
        </div>
    )
}

export default ContentRight
