import React from 'react'
import image5 from './post_5.jpg'
import image9 from './post_9.jpg'
import './Trending.css'

const Trending = () => {
    return (
        <div className = "padding">
            <div className = "row row-menu">
                <div className = "col-md-3">
                    <div className = "news">What's Trending</div>
                    <div className = "line"></div>
                </div>
                <div className = "col-md-9">
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
                </div>
            </div>
            <div className = "row">
                <div className = "news-list1 minus-top">
                    <div className = "column">
                        <div className = "big-post-w-img">
                            <p className = "small-post-title padding-post white">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "big-post">
                                <img src={image9}/>
                                <p className = "post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                <p className = "post-text">Pick the yellow peach that looks like a sunset with it red, orange and pink coat skin, peel it of with your teeth. Sink them into unripened...</p>
                                <p className = "post-information"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                            </div>
                    </div>
                    <div className = "column">
                        <div className = "small-post-with-photo photo margin-post">
                        <img src={image5}/>
                            <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <p className = "question question-w-bg">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending