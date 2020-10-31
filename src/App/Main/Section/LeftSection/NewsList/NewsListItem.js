import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class NewsListItem extends Component {

    renderLike() {
        if(this.props.isLiked){
            this.props.likeArticle(this.props.id)
        }
    }

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
        return (
            <div>
                <div className = "small-post-with-photo">
                    <img src={postImage} alt = "Post"/>
                    <p className = "small-post-title padding-post">
                       <Link to = {`/Articles/${id}`}>{postTitle}</Link> 
                    </p>
                    <p className = "post-text">{postText}</p>
                    <p className = "post-information padding-post"><span className = "author">{postAuthor}</span>{postDate}</p>
                    <button onClick = {() => likeArticle(id)} className = "like-button">LIKE ♡</button>
                </div>
            </div>
        )
    }
    
}


export default NewsListItem