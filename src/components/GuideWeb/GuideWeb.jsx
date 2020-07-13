import React from 'react'
import './GuideWeb.less'
function GuideWeb(props) {
    return (
        <div className="guide_web_wrapper">
            <div className="guide_img">在浏览器中打开</div>
            <div className="i_know" onClick={props.handleClick}>我知道了</div>
        </div>
    )
}

export default GuideWeb
