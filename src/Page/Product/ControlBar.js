import React from 'react';
import ReactPaginate from 'react-paginate';

const ControlBar = ({ countPage, show, handleSetShow, number, handeSetNumber }) => {
    const handleChangeShow = (type) => {
        if (!handleSetShow) return;
        handleSetShow(type);
    }
    const handelPageClick = ({ selected }) => {
        if (!handeSetNumber) return;
        handeSetNumber(selected);
    }
    console.log(number >= countPage ? countPage : number)
    return (
        <div className="control__bar">
            <div className="control__bar--show">
                <span onClick={() => handleChangeShow(false)} className={`iconShow ${!show ? 'active' : ''}`}><i className="fa fa-th-large"></i></span>
                <span onClick={() => handleChangeShow(true)} className={`iconShow ${show ? 'active' : ''}`}><i className="fa fa-list"></i></span>
            </div>
            <div className="control__bar--pagination">
                <div className="wrapPagination">
                    <ReactPaginate
                        forcePage={number >= countPage ? countPage : number}
                        containerClassName={'pagination'}
                        previousLabel={<i className="fa fa-chevron-circle-left"></i>}
                        nextLabel={<i className="fa fa-chevron-circle-right"></i>}
                        pageCount={countPage}
                        marginPagesDisplayed={1}
                        onPageChange={(selected) => handelPageClick(selected)}
                        pageRangeDisplayed={5}
                        pageClassName={'pagination__item'}
                        pageLinkClassName={'pagination__link'}
                        activeClassName={'active'}
                        previousClassName={'pagination__item active'}
                        previousLinkClassName={'pagination__link'}
                        nextClassName={'pagination__item active'}
                        nextLinkClassName={'pagination__link'}
                    />
                </div>
            </div>
        </div>

    )
}

export default ControlBar
