import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import TeacherCard from '../TeacherCard/TeacherCard'
import './CourseDesc.less'
function CourseDesc(props) {
    const {detail} = props
    console.log(detail)
    return (
        <div>
            <SectionTitle title={'授课老师'} />
            <div className="teacher_card_container">
                <div className="teacher_card_scroll_box">
                    {
                        detail.lecturerArray && !!detail.lecturerArray.length && detail.lecturerArray.map((item,index) => (
                            <TeacherCard key={index} data={item}/>
                        ))
                    }
                    {/* <TeacherCard />
                    <TeacherCard /> */}
                </div>
            </div>
            <div className="main_split"></div>
            <SectionTitle title={'课程简介'} />
            <img className="course_detail_img" src={detail.contentUrl} alt=""/>
        </div>
    )
}

export default CourseDesc
