import React from 'react'
import './AssessItem.less'
import RateStar from '../RateStar/RateStar'
function AssessItem() {
    return (
        <div className="assess_item_box">
            <div className="item_avatar"></div>
            <div className="item_right">
                <div className="item_user_info">
                    <div className="user_name">学霸中的战斗机</div>
                    <div className="item_date">3-28</div>
                    <div className="item_like_num">
                        <div className="like_icon"></div>
                        <div className="like_num">58</div>
                    </div>
                </div>
                <div className="item_star">
                    <RateStar score={5} />
                </div>
                <div className="item_content">课程内容条理性强，老师讲课通俗易懂，给 老师点赞，强烈建议大家报名～</div>
            </div>
        </div>
    )
}

export default AssessItem
