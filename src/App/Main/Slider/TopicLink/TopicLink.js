import React from 'react'
import './TopicLink.css'
import { Link } from 'react-router-dom'

const TopicLink = () => {
    return (
        <div className = "topic-link">
            {/* <a href="" className = "go-to-topic">Continue reading <span className = "arrow">→</span></a> */}
            <Link to = "/BlogPage" className = "go-to-topic">
                Continue reading <span className = "arrow">→</span>
            </Link>
        </div>
    )
}

export default TopicLink