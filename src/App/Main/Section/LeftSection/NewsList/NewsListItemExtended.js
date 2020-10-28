import React from 'react'

const NewsListItemExtended = ({
    article
}) => {
    return (
        <div>
            <div className = "small-post-with-photo">
                <img src={article.postImage}/>
                <p className = "small-post-title padding-post">{article.postTitle}</p>
                <p className = "post-text">{article.postText}</p>
                <p className = "post-information padding-post"><span className = "author">{article.postAuthor}</span>{article.postDate}</p>
                {/* <button onClick = {() => likeArticle(id)} className = "like-button">♡</button> */}
            </div>
        </div>
    )
}

export default NewsListItemExtended