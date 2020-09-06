import React from 'react'
import Title from '../Title/Title'
import StoriesListItem from './Stories/StoriesListItem'
import StoriesList from './Stories/StoriesList'

const TopStories = () => {
    return (
        <div>
            <Title
                title = "Top Stories"
            />
            <StoriesList/>
        </div>
    )
}

export default TopStories