import React from 'react'
const SpaceLine = ({ marginRight = false }) => {
    return (
        <div className={`wrapLineSpace ${marginRight === true ? 'marginRight' : ''}`} >
            <div className="line-left"></div>
            <div className="line-center">
                &#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;&#47;
            </div>
            <div className="line-right"></div>
        </div>
    )
}

export default SpaceLine