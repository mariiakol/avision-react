import React from 'react'
import News from './News/News'
import NewsMenu from './NewsMenu/NewsMenu'
import NewsList from './NewsList/NewsList'
import Trending from './Trending/Trending.js'
import '../../../../common/common-styles.css'


const LeftSection = () => {
    return (
        <div>
            <div className = "row row-menu">
                <div className = "col-md-3">
                    <News/>
                </div>
                <div className = "col-md-9">
                    <NewsMenu/>
                </div>
            </div>
            <div  className = "row">
                <NewsList/>
            </div> 
            <div className = "row">
                <Trending/>
            </div>
        </div>
    )
}

export default LeftSection