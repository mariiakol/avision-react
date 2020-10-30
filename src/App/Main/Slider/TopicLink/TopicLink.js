import React from 'react'
import './TopicLink.css'
import { Link } from 'react-router-dom'

const TopicLink = () => {
    return (
        <div className = "topic-link">
            <p className = "go-to-topic">
                Continue reading <span className = "arrow">→</span>
            </p>
        </div>
    )
}

export default TopicLink