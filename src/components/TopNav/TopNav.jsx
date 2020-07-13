import React from 'react'
import './TopNav.less'
function TopNav(props) {
    return (
        <div className="top_nav_container">
            <div className="nav_left_box">
                <div className="nav_logo"></div>
                <div className="nav_slogan"></div>
            </div>
            <div className="open_app_btn" onClick={props.handleClick}>打开APP</div>
        </div>
    )
}

export default TopNav
