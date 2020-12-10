import React, {Component} from 'react'
import { Link } from 'react-router-dom';

const LatestArticlesItem = ({
    postImage,
    postTitle,
    postDate,
    postAuthor
}) => {
        return (
            <div>
                <div className = "small-post-with-photo">
                    <img src={postImage} alt = "Post"/>
                    <p className = "small-post-title padding-post">{postTitle}</p>
                    <p className = "post-information padding-post"><span className = "author">{postAuthor}</span>{postDate}</p>
                </div>
            </div>
        )
    }
    


export default LatestArticlesItem