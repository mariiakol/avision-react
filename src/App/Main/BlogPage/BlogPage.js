import React from 'react'
import './BlogPage.css'
import Home from './Home/Home'
import PageContent from './PageContent/PageContent'

const BlogPage = () => {
    return (
        <div className = "page-content">
           <Home/>
           <PageContent/>
        </div>
    )
}

export default BlogPage