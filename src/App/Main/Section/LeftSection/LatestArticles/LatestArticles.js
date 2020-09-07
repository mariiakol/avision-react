import React from 'react'
import './LatestArticles.css'
import image10 from '../../../../../common/srcimages/post_10.jpg'
import image13 from '../../../../../common/srcimages/post_13.jpg'
import image14 from '../../../../../common/srcimages/post_14.jpg'
import image15 from '../../../../../common/srcimages/post_15.jpg'
import News from '../News/News'

const LatestArticles = () => {
    return (
        <div className = "padding">
            <div className = "row">
                <div className = "col-md-3">
                    <News
                        title = "Latest Articles"
                    />
                </div>
            </div>
            <div className = "row">
                <div className = "news-list">
                    <div className = "column">
                        <div className = "small-post-with-photo photo margin-post margin-left">
                            <img src={image10}/>
                            <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "border-with-background1 margin-left">
                            <p className = "small-post-title white">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "border1 margin-left">
                            <p className = "small-post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <p className = "question question-w-bg1">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                    </div>
                    <div className = "column">
                        <div className = "border1 margin-left">
                            <p className = "small-post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "small-post-with-photo">
                            <img src={image13}/>
                            <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "small-post-with-photo photo margin-post margin-left margin-top">
                            <img src={image14}/>
                            <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                    </div>
                    <div className = "column">
                        <div className = "small-post-with-photo photo margin-post margin-left">
                            <img src={image15}/>
                            <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "border-with-background2 margin-left">
                            <p className = "small-post-title white">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "border1 margin-left">
                            <p className = "small-post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <p className = "question question-w-bg margin-left">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "load-more">
                    <button className = "button">Load More</button>
                </div>
            </div>
        </div>
    )
}

export default LatestArticles