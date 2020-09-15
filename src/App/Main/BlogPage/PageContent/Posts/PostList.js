import React from 'react'
import PostData from './PostData'
import PostListItem from './PostListItem'
import './Posts.css'

const PostList = () => {
    return (
                <div className = "row-tablet">
                {
                    PostData.map(({
                        id,
                        title,
                        author, 
                        date,
                        image
                    }) => (
                        <div key = {id}>
                            <PostListItem
                                title = {title}
                                author = {author}
                                date = {date}
                                image = {image}
                            /> 
                        </div>
                    ))
                }
            </div>
    )
}

export default PostList