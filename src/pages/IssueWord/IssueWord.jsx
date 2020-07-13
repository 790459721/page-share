import React, { useEffect, useState } from 'react'
import './IssueWord.less'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { getQueryCoursesSpeech } from '../../api/index'
import { getQuery } from '../../utils/util.route.handle'
import ReactLoading from 'react-loading';
import TopNav from '../../components/TopNav/TopNav'
import GuideWeb from '../../components/GuideWeb/GuideWeb'
import {isWeixin} from '../../utils/isWeixin'
function IssueWord(props) {
    const [coursesSpeech, setCoursesSpeech ] = useState({})
    const [showFees, setShowFees ] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [ isShowGuide, setIsShowGuide ] = useState(false)
    const handleFetchData = (data) => {
        setCoursesSpeech(data.coursesSpeech)
        const showFees = JSON.parse(localStorage.getItem('showFees'))
        if(showFees) {
            setShowFees(showFees)
        }
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
        document.title = '发刊词'
        const params = getQuery(props.location.search)
        if(Object.keys(params).length) {
            getQueryCoursesSpeech(params).then(res => {
                console.log(res)
                handleFetchData(res.data)
            })
        }
        return () => {
            document.title = ''
        }
    },[props.location.search])

    const {title, articleTitle, content, bannerUrl, ...rest} = coursesSpeech
    return (
        isLoading ? (
            <ReactLoading style={{position: 'absolute',left: '50%', top: '50%', transform: 'translate(-50%, -50%)', height: '15%',width: '10%'}} type={'spokes'} height={'10%'} width={'10%'}/>
        ) : (
            <div className="issue_wrapper">
                <TopNav handleClick={ShowGuide}/>
                <div className="issue_banner" style={{backgroundImage: `url(${bannerUrl})`}}></div>
                <div className="issue_title">{title}</div>
                <AudioPlayer data={rest}/>
                <h3 className="issue_content_title">{articleTitle}</h3>
                <content className="issue_content" dangerouslySetInnerHTML={{__html:content}}>
                </content>
                <footer className="issuce_footer">
                    <div className="issuce_price_box">
                        <div className="issuce_price">￥{showFees}</div>
                        <div className="price_detial">
                            <div className="price_detail_txt">明细</div>
                            <div className="icon_arrow_up"></div>
                        </div>
                    </div>
                    <div className="footer_btn" onClick={() => ShowGuide()}>报名学习</div>
                </footer>
                {
                    isShowGuide && <GuideWeb handleClick={hideGuide}/>
                }
            </div>
        )
    )
}

export default IssueWord

