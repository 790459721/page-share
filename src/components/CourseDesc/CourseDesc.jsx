import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import TeacherCard from '../TeacherCard/TeacherCard'
import './CourseDesc.less'
function CourseDesc() {
    return (
        <div>
            <SectionTitle title={'授课老师'} />
            <div className="teacher_card_container">
                <div className="teacher_card_scroll_box">
                    <TeacherCard />
                    <TeacherCard />
                    <TeacherCard />
                </div>
            </div>
            <div className="main_split"></div>
            <SectionTitle title={'课程简介'} />
            <img className="course_detail_img" src={require('../../assets/images/course_derail_img.png')} alt=""/>
        </div>
    )
}

export default CourseDesc
