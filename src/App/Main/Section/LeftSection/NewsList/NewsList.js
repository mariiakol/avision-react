import React from 'react'
import News from '../News/News'
import NewsMenu from '../NewsMenu/NewsMenu.js'
import './NewsList.css'
import NewsListData from './NewsListData'
import NewsListItem from './NewsListItem'

const NewsList = () => {
    return (
        <div className = "width100">
            <div className = "row row-menu">
                <div className = "col-md-3">
                    <News
                        title = "Don't Miss"
                    />
                </div>
                <div className = "col-md-9">
                    <NewsMenu/>
                </div>
            </div>
            <div className = "row">
                <div className = "news-width">
                {
                    NewsListData.map(({
                        id,
                        postTitle,
                        postText,
                        postAuthor,
                        postDate,
                        postImage
                    }) => (
                        <div key = {id}>
                            <NewsListItem
                                postTitle = {postTitle}
                                postText = {postText}
                                postAuthor = {postAuthor}
                                postDate = {postDate}
                                postImage = {postImage}
                            /> 
                        </div>
                        
                    ))
                }
                </div> 
            </div>
            {/* <div className = "row">
                <div className = "news-list">
                        <div className = "big-post">
                            <img src={image1}/>
                            <p className = "post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                            <p className = "post-text">Pick the yellow peach that looks like a sunset with it red, orange and pink coat skin, peel it of with your teeth. Sink them into unripened...</p>
                            <p className = "post-information"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                        </div>
                        <div className = "column">
                            <div className = "border">
                                <p className = "small-post-title">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                            </div>
                            <div className = "border-with-background">
                                <p className = "small-post-title white">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                                <p className = "post-information"><span className = "author-sp">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                            </div>
                        </div>
                </div>
            </div>  
            <div className = "row">
                <div className = "news-list">
                    <div className = "small-post-with-photo">
                        <img src={image2}/>
                        <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                        <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                    </div>
                    <div className = "small-post-with-photo">
                        <img src={image3}/>
                        <p className = "small-post-title padding-post">How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?</p>
                        <p className = "post-information padding-post"><span className = "author">Katy Liu </span> • Sep 29, 2017 at 9:48 am</p>
                    </div>
                    <div className = "column margin-minus">
                        <p className = "question">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                        <p className = "question">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                        <p className = "question">How did Van Gogh's Turbulent Mind Depict Concepts in Physics?</p>
                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

export default NewsList