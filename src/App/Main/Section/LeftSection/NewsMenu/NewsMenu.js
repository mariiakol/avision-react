import React from 'react'
import './NewsMenu.css'

const NewsMenu = () => {
    return (
        <div className = "news-categories">
            <ul className = "topmenu">
                <li><a href="#" className = "">all</a></li>
                <li><a href="#" className = "">style hunter</a></li>
                <li><a href="#" className = "">vogue</a></li>
                <li><a href="#" className = "">health & fitness</a></li>
                <li><a href="#" className = "">travel</a></li>
                <li><a href="#" className = "drop">more</a>
                    <ul className = "submenu">
                        <li><a href=""></a>new look 2018</li>
                        <li><a href=""></a>street fashion</li>
                        <li><a href=""></a>business</li>
                        <li><a href=""></a>recipes</li>
                        <li><a href=""></a>sport</li>
                        <li><a href=""></a>celebrities</li>
                    </ul>
                </li>
                </ul>
        </div>
    )
}

export default NewsMenu