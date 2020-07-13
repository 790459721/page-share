import React from 'react'
import RateStar from '../RateStar/RateStar'
import './Assess.less'
import AssessItem from '../AssessItem/AssessItem'

const assessData = [
    {
        name: '李海桃',
        star: 5,
        content: '老师讲解的通俗易懂，非常好！',
        date: '5-28',
        likeNum: 23
    },
    {
        name: '冯秀芳',
        star: 5,
        content: '老师讲的很好，没想到线上学习还这么贴心 接地气',
        date: '6-03',
        likeNum: 34
    },
    {
        name: 'ToBian',
        star: 4.3,
        content: '不错，很棒！',
        date: '6-12',
        likeNum: 43
    },
    {
        name: '李小明',
        star: 5,
        content: '课程内容条理性强，老师讲课通俗易懂，给 老师点赞，强烈建议大家报名～',
        date: '6-20',
        likeNum: 58
    },
    {
        name: '汪昭彬',
        star: 5,
        content: '讲课的内容很实用，日常生活 营养健康中都用的上，很棒的内容',
        date: '6-29',
        likeNum: 23
    },
]

function Assess() {
    return (
        <div className="assess_container">
            <div className="assess_average">
                <div className="average_num">4.8</div>
                <RateStar score={4.8} large/>
            </div>
            <div>
                {
                    assessData.map((item,index) => {
                        return (
                            <AssessItem data={item} key={index}/>
                        )
                    })
                }
                {/* <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem /> */}
            </div>
        </div>
    )
}

export default Assess
