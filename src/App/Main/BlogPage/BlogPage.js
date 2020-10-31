import React from 'react'
import NewsListData, { getArticlesMap } from '../Section/LeftSection/NewsList/NewsListData'
import PageContent from './PageContent/PageContent'
import './BlogPage.css'
import '../BlogPage/Home/Home.css'

const BlogPage = ({
    match,
    articlesObject = getArticlesMap(NewsListData)
}) => {
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