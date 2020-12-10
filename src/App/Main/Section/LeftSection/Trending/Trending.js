import React from 'react'
import image5 from '../../../../../common/srcimages/post_5.jpg'
import image9 from '../../../../../common/srcimages/post_9.jpg'
import './Trending.css'
import News from '../News/News'
import NewsMenu from '../NewsMenu/NewsMenu'

const Trending = () => {
    return (
        <div className = "width100">
            <div className = "padding">
                <div className = "row row-menu">
                    <div className = "col-md-3">
                        <News
                            title = "Trending"
                        />
                    </div>
                    {/* <div className = "col-md-9">
                        <NewsMenu/>
                    </div> */}
                </div>
                <div className = "row">
                    <div className = "news-list minus-top">
                        <div className = "column">
                            <div className = "big-post-w-img">
                                <p className = "small-post-title padding-post white">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                            </div>
                            <div className = "big-post">
                                    <img src={image9} alt = "Post"/>
                                    <p className = "post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                    <p className = "post-text">Pick the yellow peach that looks like a sunset with it red, orange and pink coat skin, peel it of with your teeth. Sink them into unripened...</p>
                                    <p className = "post-information"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                                </div>
                        </div>
                        <div className = "column">
                            <div className = "small-post-with-photo photo margin-post">
                            <img src={image5} alt = "Post"/>
                                <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                            </div>
                            <p className = "question question-w-bg">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default Trending