import React from 'react'
import './NewsMenu.css'

const NewsMenu = () => {
    return (
        <div className = "news-categories">
            <ul className = "topmenu">
                <li><a href="/#" className = "">all</a></li>
                <li><a href="/#" className = "">style hunter</a></li>
                <li><a href="/#" className = "">vogue</a></li>
                <li><a href="/#" className = "">health & fitness</a></li>
                <li><a href="/#" className = "">travel</a></li>
                <li><a href="/#" className = "drop">more</a>
                    <ul className = "submenu">
                        <li><a href="/#">new look 2018</a></li>
                        <li><a href="/#">street fashion</a></li>
                        <li><a href="/#">business</a></li>
                        <li><a href="/#">recipes</a></li>
                        <li><a href="/#">sport</a></li>
                        <li><a href="/#">celebrities</a></li>
                    </ul>
                </li>
                </ul>
        </div>
    )
}

export default NewsMenu