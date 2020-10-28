import React from 'react'
import {keys} from 'lodash'
import './Liked.css'

const Liked = ({
    likedArticles
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
                    {
                        keys(likedArticles).map((articleId) => (
                            <div>
                                {articleId}:{likedArticles[articleId]}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Liked 