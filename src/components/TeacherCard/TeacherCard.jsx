import React from 'react'
import './TeacherCard.less'
function TeacherCard(props) {
    const { data } = props
    return (
        <div className="teacher_card_box">
            <div className="card_top">
                <div className="top_avatar" style={{backgroundImage: `url(${data.headUrl})`}}></div>
                <div className="teacher_name">{data.name}</div>
            </div>
            <div className="teacher_card_desc">
                {data.memo}
            </div>
        </div>
    )
}

export default TeacherCard
