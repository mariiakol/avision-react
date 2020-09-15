import React from 'react'
import Title from '../../../Section/RightSection/Title/Title'
import CommentsList from './CommentsList'

const Comments = () => {
    return (
        <div className = "comments post-comment">
            <Title
                title = "Comments"
            />
            <CommentsList/>
        </div>
    )
}

export default Comments