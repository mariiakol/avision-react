import React from 'react'
import './LatestArticles.css'
import News from '../News/News'
import LatestArticlesItem from './LatestArticlesItem'
import LatestArticlesData from './LatestArticlesData'

const LatestArticles = () => {
    return (
        <div className = "padding articles">
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
                     LatestArticlesData.map(({
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
        </div>
    )
}

export default LatestArticles