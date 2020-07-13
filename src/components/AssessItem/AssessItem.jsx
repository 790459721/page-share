import React from 'react'
import './AssessItem.less'
import RateStar from '../RateStar/RateStar'
function AssessItem(props) {
    const {data} = props
    return (
        <div className="assess_item_box">
            <div className="item_avatar"></div>
            <div className="item_right">
                <div className="item_user_info">
                    <div className="user_name">{data.name}</div>
                    <div className="item_date">{data.date}</div>
                    <div className="item_like_num">
                        <div className="like_icon"></div>
                        <div className="like_num">{data.likeNum}</div>
                    </div>
                </div>
                <div className="item_star">
                    <RateStar score={data.star}/>
                </div>
                <div className="item_content">{data.content}</div>
            </div>
        </div>
    )
}

export default AssessItem
