import React from 'react'

const NewsListItemExtended = ({
    article,
    removeArticle
}) => {
    return (
        <div>
            <div className = "small-post-with-photo">
                <img src={article.postImage} alt="Post"/>
                <p className = "small-post-title padding-post">{article.postTitle}</p>
                <p className = "post-text">{article.postText}</p>
                <p className = "post-information padding-post"><span className = "author">{article.postAuthor}</span>{article.postDate}</p>
                <button className = "like-button" 
                    onClick = {() => removeArticle(article.id)}
                >DELETE</button>
            </div>
        </div>
    )
}

export default NewsListItemExtended