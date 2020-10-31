import React from 'react'
import './Posts.css'

const PostListItem = ({
    title,
    author,
    date,
    image
}) => {
    return (
        <div className = "small-post-with-photo width-post">
            <img src={image} alt = "Post"/>
            <p className = "small-post-title padding-post">{title}</p>
            <p className = "post-information padding-post"><span className = "author-in-post">{author} </span> • {date}</p>
        </div> 
    )
    
}

export default PostListItem