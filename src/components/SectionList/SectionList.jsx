import React from 'react'
import './SectionList.less'
import SectionItem from '../SectionItem/SectionItem'
import { routeJump } from '../../utils/util.route.handle'
function SectionList(props) {
    const { activeIndex, handleClickSection, catalogArray,speechTitle,handleClickPlay, ...rest } = props
    const jumpToIssueWord = () => {
        const params = JSON.parse(localStorage.getItem('courseId'))
        routeJump(rest,{
            url: '/issueWord',
            params
        })
    }
    return (
        <div className="course_detail_content">
            <div className="content_course_list">
                <div className="issue_word_module">
                    <div className="issue_word_name">
                        <span>{speechTitle}</span>
                    </div>
                    <div className="issue_paly_icon" onClick={() => {jumpToIssueWord()}}></div>
                    <div className="issue_word_tag">本节免费</div>
                </div>
                <div className="list_box">
                    {
                       catalogArray && !!catalogArray.length && catalogArray.map((item, key) => (
                            <div className="list_section" key={key} onClick={(e) => handleClickSection(e,key)}>
                                <div className={`section_title ${key === activeIndex ? 'noboder' : ''}`}>
                                    <div className="title_text">{item.name} </div>
                                    <div className={`title_icon ${key === activeIndex ? 'arrow_down' : 'arrow_right'}`}></div>
                                </div>
                                {
                                    key === activeIndex && (
                                        <div className="section_list">
                                            {
                                                item.chapterArray.map((item, index) => (
                                                    <SectionItem handleClick={handleClickPlay} key={index} data={item}/>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionList
