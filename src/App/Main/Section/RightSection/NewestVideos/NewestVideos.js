import React from 'react'
import Title from '../Title/Title'
import NewestVideosList from './NewestVideosList'

const NewestVideos =  () => {
    return (
        <div className = "padding">
            <Title
                title = "Newest Videos"
            />
            <NewestVideosList/>  
        </div>
    )
}

export default NewestVideos