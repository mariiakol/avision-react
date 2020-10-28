import React from 'react'
import './Main.css'
import { Route } from 'react-router-dom'
import BlogPage from './BlogPage/BlogPage.js'
import MainContent from './MainContent/MainContent.js'
import Liked from './Liked/Liked'

const Main = () => {
    return(
        <div>
            <Route path = "/" exact render = {() => (
                <MainContent/>
            )}/>
            <Route path = "/BlogPage" component = {BlogPage}/>
            <Route path = "/LikedArticles" component = {Liked}/>

        </div>
    )
}

export default Main