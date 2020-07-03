import React from 'react'
import './SectionTitle.less'
function SectionTitle(props) {
    const {title} = props
    return (
        <div className="section_title_box">
            <h3>{title}</h3>
        </div>
    )
}

export default SectionTitle
