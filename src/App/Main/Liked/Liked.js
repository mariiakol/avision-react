import React from 'react'
import {keys} from 'lodash'
import {getArticlesMap} from '../Section/LeftSection/NewsList/NewsListData'
import NewsListData from '../Section/LeftSection/NewsList/NewsListData'
import NewsListItemExtended from '../Section/LeftSection/NewsList/NewsListItemExtended'
import './Liked.css'
import '../Section/LeftSection/NewsList/NewsList.css'

const Liked = ({
    likedArticles,
    articlesObject = getArticlesMap(NewsListData),
    CartItem = NewsListItemExtended,
    removeArticle
}) => {
    return (
        <div className = "likedArticles">
            <div className = "container">
                <div className = "row">
                    <div className = "center">
                        <h1 className = "topic-text">FAVORITE ARTICLES</h1> 
                    </div>
                </div>
                <div className = "row">
                    <div className = "liked-list">
                        {
                            keys(likedArticles).map((articleId) => (
                                <div className = "liked-list-item" key = {articleId}>
                                   <CartItem
                                    article = {articlesObject[articleId]}
                                    key = {articleId}
                                    removeArticle = {removeArticle}
                                /> 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liked 