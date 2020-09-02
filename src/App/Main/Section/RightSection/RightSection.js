import React from 'react'
import './RightSection.css'
import Advert from './Advert/Advert.js'
import Mind from './Mind/Mind'

const RightSection = () => {
    return (
        <div className = "center">
            <div className = "post-bg">
                <div className = "sidebar">
                    <div className = "sidebar-bg">
                        <div className = "row">
                            <div className = "news news-margin">Top Stories</div>
                        </div>
                        <div className = "row">
                            <Advert/>
                        </div>
                        <div className = "row">
                            <Mind/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection