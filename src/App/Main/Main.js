import React from 'react'
import './Main.css'
import { Route } from 'react-router-dom'
import BlogPage from './BlogPage/BlogPage.js'
import MainContent from './MainContent/MainContent.js'

const Main = () => {
    return(
        <div>
            <Route path = "/" exact render = {() => (
                <MainContent/>
            )}/>
            <Route path = "/BlogPage" component = {BlogPage}/>
        </div>
    )
}

export default Main