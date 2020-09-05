import React from 'react'
import News from './News/News'
import NewsMenu from './NewsMenu/NewsMenu'
import NewsList from './NewsList/NewsList'
import Trending from './Trending/Trending.js'
import Video from './Video/Video'
import '../../../../common/common-styles.css'
import LatestArticles from './LatestArticles/LatestArticles'


const LeftSection = () => {
    return (
        <div>
            <div  className = "row">
                <NewsList/>
            </div> 
            <div className = "row">
                <Trending/>
            </div>
            <div className = "row">
                {/* <Video/> */}
            </div>
            <div className = "row">
                <LatestArticles/>
            </div>
        </div>
    )
}

export default LeftSection