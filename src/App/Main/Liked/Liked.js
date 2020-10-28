import React from 'react'
import {keys} from 'lodash'
import './Liked.css'
import '../Section/LeftSection/NewsList/NewsList.css'
import {getArticlesMap} from '../Section/LeftSection/NewsList/NewsListData'
import NewsListData from '../Section/LeftSection/NewsList/NewsListData'
import NewsListItem from '../Section/LeftSection/NewsList/NewsListItem'
import NewsListItemExtended from '../Section/LeftSection/NewsList/NewsListItemExtended'

const Liked = ({
    likedArticles,
    articlesObject = getArticlesMap(NewsListData),
    CartItem = NewsListItemExtended
}) => {
    return (
        <div className = "likedArticles">
            <div className = "container">
                <div className = "row">
                    <div className = "center">
                        <h1 className = "topic-text">LIKED ARTICLES</h1> 
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