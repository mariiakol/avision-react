import React from 'react'
import TopicTitle from '../../Slider/TopicTitle/TopicTitle'
import './Home.css'
import TopicText from '../../Slider/TopicText/TopicText'
import NewsListData,{getArticlesMap} from '../../Section/LeftSection/NewsList/NewsListData'

const Home = ({
    match,
    articlesObject = getArticlesMap(NewsListData)
}) => {
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
                            <div className = "topic-text">{articlesObject[match.params.articleId]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home