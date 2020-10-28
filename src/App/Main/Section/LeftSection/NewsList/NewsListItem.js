import React, {Component} from 'react'

class NewsListItem extends Component {

    render() {
        const {
            id,
            postTitle,
            postAuthor,
            postText,
            postDate,
            postImage,
            likeArticle
        } = this.props;
        console.log(this);
        return (
            <div>
                <div className = "small-post-with-photo">
                    <img src={postImage}/>
                    <p className = "small-post-title padding-post">{postTitle}</p>
                    <p className = "post-text">{postText}</p>
                    <p className = "post-information padding-post"><span className = "author">{postAuthor}</span>{postDate}</p>
                    <button onClick = {() => likeArticle(id)}>Like</button>
                </div>
            </div>
        )
    }
    
}


export default NewsListItem