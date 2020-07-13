import React, { useState, useEffect } from 'react'
import ArcProgress from 'react-arc-progress'
import './CourseDetail.less'
import SectionList from '../../components/SectionList/SectionList'
import CourseDesc from '../../components/CourseDesc/CourseDesc'
import Assess from '../../components/Assess/Assess'
import ReactLoading from 'react-loading';
import { getQueryProfile } from '../../api/index'
import { getQuery } from '../../utils/util.route.handle'
import TopNav from '../../components/TopNav/TopNav'
import GuideWeb from '../../components/GuideWeb/GuideWeb'
import {isWeixin} from '../../utils/isWeixin'
function CourseDetail(props) {
    const customText = [
        { text: '课程进度', size: '10px', color: '#999999', x: 30, y: 22 },
        { text: '0%', size: '14px', color: '#2CCD7A', x: 30, y: 38 }]
    const tabList = ['课程介绍', '课程目录', '课程评价（5）']
    //state
    const [activeIndex, setActiveIndex] = useState(null) // 章节item点击的激活状态
    const [tabIndex, setTabIndex] = useState(1) // tab当前index
    const [ courses, setCourses ] = useState({})
    const [ speechTitle, setSpeechTitle ] = useState('')
    const [ isLoading, setLoading ] = useState(true)
    const [ isShowGuide, setIsShowGuide ] = useState(false)
    const handleTabClick = (index) => {
        setTabIndex(index)
    }
    const handleClickSection = (e,key) => {
        if(e.target.className.includes('section_title')) {
            setActiveIndex(key === activeIndex ? null : key)
        }
    }
    const handleFetchData = (data) => {
        console.log(data)

        const { courses, speechTitle } = data
        localStorage.setItem('showFees', JSON.stringify(courses.showFees))
        setCourses({...courses})
        setSpeechTitle(speechTitle)
        setLoading(false)
    }
    const ShowGuide = () => {
        if(isWeixin()) {
            setIsShowGuide(true)
        }else {
            window.location.href = "dasurebaohealth://dasurebaohealth/ProjectDetail?courseId=2"
            noApp()
        }
    }
    const noApp = () => {
        const t = Date.now()
        const url = 'https://static.app.dasurebao.com/common/download.html'
        let timer = null
        timer = setTimeout(() => {
            return Date.now() - t > 2200 ? (clearTimeout(timer), !1) : !document.webkitHidden && !document.hidden && void (window.location.href = url);  
        })
    }
    const hideGuide = () => {
        setIsShowGuide(false)
    }

    useEffect(() => {
        document.title = '课程详情页'
        const params = getQuery(props.location.search)
        localStorage.setItem('courseId', JSON.stringify(params))

        if(Object.keys(params).length) {
            getQueryProfile(params).then(res => {
                handleFetchData(res.data)
            }, err => {
                alert(err)
            })
        }
        return () => {
            document.title = ''
        }
    },[props.location.search])

    return (
        isLoading ? (
            <ReactLoading style={{position: 'absolute',left: '50%', top: '50%', transform: 'translate(-50%, -50%)', height: '15%',width: '10%'}} type={'spokes'} height={'10%'} width={'10%'}/>
        ): (
            <div className="course_detail_wrapper">
                <TopNav handleClick={ShowGuide}/>
                <div className="course_detail_banner" style={{backgroundImage: `url(${courses.image})`}}></div>
                <header className="course_detail_header">
                    <div className="header_left">
                        <div className="left_top">
                            <p className="header_title">{courses.name}</p>
                            <p className="header_total_classes">{courses.classTime}</p>
                        </div>
                        <aside className="header_course_desc">{courses.title}</aside>
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
                        progress='0'
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
                                </div>
                            ))
                        }
                    </div>
                    {
                        tabIndex === 0 ? <CourseDesc detail={courses.detail} /> : tabIndex === 1 ? <SectionList activeIndex={activeIndex} handleClickSection={handleClickSection} handleClickPlay={ShowGuide}  catalogArray={courses.catalogArray} speechTitle={speechTitle}  {...props}/> : tabIndex === 2 ? <Assess /> : null
                    }
                    
                </main>
                {
                    isShowGuide && <GuideWeb handleClick={hideGuide}/>
                }
            </div>
        )
    )
}

export default CourseDetail
