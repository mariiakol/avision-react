import React from 'react'
import Advert from './Advert/Advert.js'
import Mind from './Mind/Mind'
import TopStories from './TopStories/TopStories'
import NewestVideos from './NewestVideos/NewestVideos'
import FutureEvents from './FutureEvents/FutureEvents'
import './RightSection.css'

const RightSection = () => {
    return (
        <div className = "center">
            <div className = "post-bg">
                <div className = "sidebar">
                    <div className = "sidebar-bg">
                        <div className = "row">
                            <TopStories/>
                        </div>
                        <div className = "row">
                            <Advert/>
                        </div>
                        <div className = "row">
                            <NewestVideos/>
                        </div>
                        <div className = "row">
                            <Mind/>
                        </div>
                        <div className = "row">
                            <FutureEvents/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection