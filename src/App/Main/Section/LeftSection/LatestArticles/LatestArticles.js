import React from 'react'
import './LatestArticles.css'
import News from '../News/News'
import LatestArticlesItem from './LatestArticlesItem'
import LatestArticlesData from './LatestArticlesData'

const LatestArticles = ({
    handleShowMorePosts,
    postsToRender
}) => {
    return (
        <div className = "padding">
            <div className = "row">
                <div className = "col-md-3">
                    <News
                        title = "Latest Articles"
                    />
                </div>
            </div>
            <div className = "row">
                <div className = "news-width">
                {
                     postsToRender.map(({
                        id,
                        postTitle,
                        postAuthor,
                        postDate,
                        postImage
                    }) => (
                        <div key = {id}>
                            <LatestArticlesItem
                                id = {id}
                                postTitle = {postTitle}
                                postAuthor = {postAuthor}
                                postDate = {postDate}
                                postImage = {postImage}
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

export default LatestArticles