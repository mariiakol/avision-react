import React from 'react'

const LatestArticlesItem = ({
    postTitle,
    postAuthor,
    postDate,
    postImage
}) => {
    return (
        <div>
             <div className = "small-post-with-photo photo margin-post margin-left margin-top-bottom">
                <img src={postImage} alt="Post"/>
                <p className = "small-post-title padding-post">{postTitle}</p>
                <p className = "post-information padding-post"><span className = "author">{postAuthor}</span>{postDate}</p>
            </div>
        </div>
    )
}

export default LatestArticlesItem