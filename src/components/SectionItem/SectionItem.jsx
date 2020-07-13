import React from 'react'

function SectionItem(props) {
    const {data, handleClick } = props
    return (
        <div className="section_list_item" >
            <div className="item_left">
                <div className="item_title">{data.name}</div>
                <div className="item_learn_time">{data.classTime} </div>
                <div className="rest_time">{data.classTime}</div>
            </div>
            <div className="item_right" onClick={()=> handleClick()}>播放</div>
        </div>
    )
}

export default SectionItem
