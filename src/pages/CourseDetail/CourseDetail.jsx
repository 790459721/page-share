import React, { useState, useEffect } from 'react'
import ArcProgress from 'react-arc-progress'
import './CourseDetail.less'
import SectionList from '../../components/SectionList/SectionList'
import CourseDesc from '../../components/CourseDesc/CourseDesc'
import Assess from '../../components/Assess/Assess'
function CourseDetail(props) {
    const customText = [
        { text: '课程进度', size: '10px', color: '#999999', x: 30, y: 22 },
        { text: '20%', size: '14px', color: '#2CCD7A', x: 30, y: 38 }]
    const tabList = ['课程介绍', '课程目录', '课程评价（100）']
    //state
    const [activeIndex, setActiveIndex] = useState(null) // 章节item点击的激活状态
    const [tabIndex, setTabIndex] = useState(1) // tab当前index


    const handleTabClick = (index) => {
        setTabIndex(index)
    }
    const handleClickSection = (e,key) => {
        if(e.target.className.includes('section_title')) {
            setActiveIndex(key === activeIndex ? null : key)
        }
    }
    useEffect(() => {
        document.title = '课程详情页'
        return () => {
            document.title = ''
        }
    },[])

    return (
        <div className="course_detail_wrapper">
            <div className="course_detail_banner"></div>
            <header className="course_detail_header">
                <div className="header_left">
                    <div className="left_top">
                        <p className="header_title">膳食营养</p>
                        <p className="header_total_classes">24个课时</p>
                    </div>
                    <aside className="header_course_desc">民以食为天，合理安排平衡膳食…</aside>
                </div>
                <ArcProgress
                    arcStart={-90}
                    arcEnd={270}
                    thickness={2}
                    textStyle={{
                        size: '12px'
                    }}
                    emptyColor={'#ccc'}
                    fillColor={'#2CCD7A'}
                    progress='.2'
                    size={60}
                    customText={customText}
                />
            </header>
            <div className="main_split"></div>
            <main className="course_detail_main">
                {/* tab选项 */}
                <div className="course_tab_box">
                    {
                        tabList.map((item, index) => (
                            <div className={`tab_item ${tabIndex === index ? 'active' : ''}`} key={index} onClick={() => handleTabClick(index)}>
                                <span>{item}</span>
                                {/* {
                                    index === 1 && <div className="mark_round"></div>
                                } */}
                            </div>
                        ))
                    }
                </div>
                {
                    tabIndex === 0 ? <CourseDesc /> : tabIndex === 1 ? <SectionList activeIndex={activeIndex} handleClickSection={handleClickSection} {...props}/> : tabIndex === 2 ? <Assess /> : null
                }
                
            </main>
        </div>
    )
}

export default CourseDetail
