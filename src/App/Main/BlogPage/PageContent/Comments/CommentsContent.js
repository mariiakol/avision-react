import React from 'react'
import comment_author from '../../../../../common/srcimages/comment_author_1.jpg'
import './CommentsContent.css'

const CommentsContent = () => {
    return (
        <div className = "comment-body">
            <div className = "row">
                <div className = "author">
                    <div className = "author-information">
                        <img src={comment_author}/>
                        <div className = "meta">Katy Liu <span>Sep 29, 2017 at 9:48 am</span></div>
                    </div>
                    <button className = "post-button margin-button">Reply</button>
                </div>
            </div>
            <div className = "row">
                <p className = "comment-content">Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened.</p>
            </div>
        </div>
    )
}

export default CommentsContent