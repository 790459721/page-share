import React, { useState, useEffect } from 'react'
import './RateStar.less'

function RateStar(props) {
    const {score, large} = props
    const [starNum, setStarNum] = useState(['star_full','star_full','star_full','star_full','star_full',])

    const getStar = (score) => {
        const newStar =starNum.map(()=>{
            --score;
            console.log(score);
            return score >=1 ? 'star_full' : 'star_half'; 
        })
        setStarNum([...newStar])
    }

    useEffect(() => {
        getStar(Math.round(score)+1)
    },[score])
    return (
        <div>
            <div className="star_box">
                {
                   starNum.map((item,index) => (
                    <div className={`star_item ${item} ${large ? 'large_star' : ''}`} key={index}></div>
                   )) 
                }
            </div>
        </div>
    )
}

export default RateStar
