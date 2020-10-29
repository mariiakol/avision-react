import React from 'react'
import News from '../News/News'
import NewsMenu from '../NewsMenu/NewsMenu.js'
import './NewsList.css'
import NewsListData from './NewsListData'
import NewsListItem from './NewsListItem'

const NewsList = ({
    likeArticle,
    removeArticle
}) => {
    return (
        <div className = "width100">
            <div className = "row row-menu">
                <div className = "col-md-3">
                    <News
                        title = "Don't Miss"
                    />
                </div>
                <div className = "col-md-9">
                    <NewsMenu/>
                </div>
            </div>
            <div className = "row">
                <div className = "news-width">
                {
                    NewsListData.map(({
                        id,
                        postTitle,
                        postText,
                        postAuthor,
                        postDate,
                        postImage
                    }) => (
                        <div key = {id}>
                            <NewsListItem
                                id = {id}
                                postTitle = {postTitle}
                                postText = {postText}
                                postAuthor = {postAuthor}
                                postDate = {postDate}
                                postImage = {postImage}
                                likeArticle = {likeArticle}
                                removeArticle = {removeArticle}
                            /> 
                        </div>
                        
                    ))
                }
                </div> 
            </div>
        </div>
        
    )
}

export default NewsList