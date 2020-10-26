import React from 'react'
import './News.css'

const News = (props) => {
    return (
        <div>
            <div className = "news">{props.title}</div>
            <div className = "line"></div> 
        </div>
    )
}

export default News