import React from 'react'
import TopicTitle from './TopicTitle/TopicTitle.js'
import TopicText from './TopicText/TopicText.js'
import TopicLink from './TopicLink/TopicLink.js'
import Posts from './Posts/Posts.js'
import NextPost from './NextPost/NextPost.js'
import '../../../common/style/reset.css'

const Slider = () => {
    return (
        <section id = "section1">
                <div className = "container">
                    <div className = "row">
                        <TopicTitle/>
                    </div> 
                    <div className = "row">
                        <div className = "col-md-5">
                            <TopicText/>
                        </div>
                    </div>
                    <div className = "row">
                        <TopicLink/>
                    </div>
                    <div className = "row container-row-mobile">
                        <div className = "col-md-8">
                            <Posts/>
                        </div>
                        <div className = "col-md-4">
                            <NextPost/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Slider