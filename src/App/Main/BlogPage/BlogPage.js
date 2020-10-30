import React from 'react'
import NewsListData, { getArticlesMap } from '../Section/LeftSection/NewsList/NewsListData'
import './BlogPage.css'
import '../BlogPage/Home/Home.css'
import PageContent from './PageContent/PageContent'
import TopicTitle from '../Slider/TopicLink/TopicLink'

const BlogPage = ({
    match,
    articlesObject = getArticlesMap(NewsListData)
}) => {
    console.log(match)
    console.log(articlesObject)
    return (
        <div className = "page-content">
           <div className = "home">
            <div className = "container">
                <div className = "row">
                    <div className = "center">
                        <div className = "post-title-home">
                            <div className = "topic-text">{articlesObject[match.params.articleId].postTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           <PageContent/>
        </div>
    )
}

export default BlogPage