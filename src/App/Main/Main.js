import React from 'react'
import './Main.css'
import { Route } from 'react-router-dom'
import BlogPage from './BlogPage/BlogPage.js'
import MainContent from './MainContent/MainContent.js'
import Liked from './Liked/Liked'

const Main = ({
    likedArticles,
    likeArticle,
    removeArticle
}) => {
    return(
        <div>
            <Route path = "/" exact render = {() => (
                <MainContent 
                likeArticle = {likeArticle}
                removeArticle = {removeArticle}
                />
            )}/>
            {/* <Route path = "/BlogPage" component = {BlogPage}/> */}
            <Route path = "/Articles/:articleId" component = {BlogPage}/>

            <Route path = "/LikedArticles" render = {() => (
                <Liked 
                likedArticles = {likedArticles}
                removeArticle = {removeArticle}
                />
            )}/>

        </div>
    )
}

export default Main