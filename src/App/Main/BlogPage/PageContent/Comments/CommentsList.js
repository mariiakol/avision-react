import React from 'react'
import CommentsContent from './CommentsContent'

const CommentsList = () => {
    return (
        <div className = "comments-ul">
            <ul>
                <li>
                    <CommentsContent/>
                </li>
                <li>
                    <CommentsContent/>
                </li>
            </ul>
            <CommentsContent/>
        </div>
    )
}

export default CommentsList