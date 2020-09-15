import React from 'react'
import Title from '../../../Section/RightSection/Title/Title'
import './PostComment.css'
import Form from './Form/Form'

const PostComment = () => {
    return (
        <div className = "post-comment">
            <Title
                title = "Post Comment"
            />
            <Form/>
        </div>
    )
}

export default PostComment