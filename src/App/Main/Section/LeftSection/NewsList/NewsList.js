import React from 'react'
import News from '../News/News'
import './NewsList.css'
import NewsListItem from './NewsListItem'

const NewsList = ({
    likeArticle,
    removeArticle,
    handleShowMorePosts,
    postsToRender
}) => {

    return (
        <div className = "width100">
            <div className = "row row-menu">
                <div className = "col-md-3">
                    <News
                        title = "Don't Miss"
                    />
                </div>
                {/* <div className = "col-md-9">
                    <NewsMenu/>
                </div> */}
            </div>
            <div className = "row">
                <div className = "news-width">
                {
                    postsToRender.map(({
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
            <div className = "row">
                <div className = "load-more">
                    <button className = "button" onClick={handleShowMorePosts}>Load More</button>
                </div>
            </div>
        </div>
        
    )
}

export default NewsList