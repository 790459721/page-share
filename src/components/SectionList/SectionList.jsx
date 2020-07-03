import React from 'react'
import './SectionList.less'
import SectionItem from '../SectionItem/SectionItem'
function SectionList(props) {
    const { activeIndex, handleClickSection } = props
    return (
        <div className="course_detail_content">
            <div className="content_course_list">
                <div className="issue_word_module">
                    <div className="issue_word_name">
                        <span>发刊词：</span>
                        <span>你会吃吗？</span>
                    </div>
                    <div className="issue_paly_icon"></div>
                    <div className="issue_word_tag">本节免费</div>
                </div>
                <div className="list_box">
                    {
                        [1, 2, 3].map((item, key) => (
                            <div className="list_section" key={key} onClick={() => handleClickSection(key)}>
                                <div className={`section_title ${key === activeIndex ? 'noboder' : ''}`}>
                                    <div className="title_text">第一章：基础营养学</div>
                                    <div className={`title_icon ${key === activeIndex ? 'arrow_down' : 'arrow_right'}`}></div>
                                </div>
                                {
                                    key === activeIndex && (
                                        <div className="section_list">
                                            {
                                                [1, 2, 3].map((item, index) => (
                                                    <SectionItem key={index}/>
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
