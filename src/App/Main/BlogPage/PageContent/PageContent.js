import React from 'react'
import Author from './Author/Author'
import PostBody from './PostBody/PostBody'
import PostList from './Posts/PostList'
import PostComment from './PostComment/PostComment'
import Comments from './Comments/Comments'

const PageContent = () => {
    return (
        <div className = "container"> 
            <Author/>
            <PostBody/>
            <Author/>
            <div className = "space-between">
                <PostList/>
                <PostList/>
            </div>
            <PostComment/>
            <Comments/>
        </div>
    )
}

export default PageContent