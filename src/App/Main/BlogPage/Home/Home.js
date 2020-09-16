import React from 'react'
import TopicTitle from '../../Slider/TopicTitle/TopicTitle'
import './Home.css'
import TopicText from '../../Slider/TopicText/TopicText'
import PageContent from '../PageContent/PageContent'

const Home = () => {
    return (
        <div className = "home">
            <div className = "container">
                <div className = "row">
                    <div className = "center">
                        <TopicTitle/> 
                    </div>
                </div>
                <div className = "row">
                    <div className = "center">
                        <div className = "post-title-home">
                            <TopicText/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home