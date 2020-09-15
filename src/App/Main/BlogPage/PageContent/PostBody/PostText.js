import React from 'react'
import './PostBody.css'

const PostText = (props) => {
    return (
        <p className = "posttext">{props.text}</p>
    )
}

export default PostText