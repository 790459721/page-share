import React from 'react'
import RateStar from '../RateStar/RateStar'
import './Assess.less'
import AssessItem from '../AssessItem/AssessItem'

function Assess() {
    return (
        <div className="assess_container">
            <div className="assess_average">
                <div className="average_num">4.8</div>
                <RateStar score={4.8} large/>
            </div>
            <div>
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
                <AssessItem />
            </div>
        </div>
    )
}

export default Assess
