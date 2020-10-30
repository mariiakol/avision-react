import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class NewsListItem extends Component {

    render() {
        const {
            id,
            postTitle,
            postAuthor,
            postText,
            postDate,
            postImage,
            likeArticle,
            removeArticle
        } = this.props;
        console.log(this);
        return (
            <div>
                <div className = "small-post-with-photo">
                    <img src={postImage}/>
                    <p className = "small-post-title padding-post">
                       {/* <Link to = {`/BlogPage/Articles/${id}`}>{postTitle}</Link>  */}
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