import React from 'react'

const NewsListItem = ({
    postTitle,
    postAuthor,
    postText,
    postDate,
    postImage
}) => {
    return (
        <div>
             <div className = "small-post-with-photo">
                <img src={postImage}/>
                <p className = "small-post-title padding-post">{postTitle}</p>
                <p className = "post-text">{postText}</p>
                <p className = "post-information padding-post"><span className = "author">{postAuthor}</span>{postDate}</p>
            </div>
        </div>
    )
}

export default NewsListItem