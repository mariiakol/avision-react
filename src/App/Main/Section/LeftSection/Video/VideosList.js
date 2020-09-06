import React from 'react'
import VideosData from './VideosData'
import VideosListItem from './VideosListItem'

const VideosList = () => {
    return (
        <div className = "videos">
            {
                VideosData.map(({
                    id,
                    name, 
                    date,
                    image
                }) => (
                    <div key = {id}>
                        <VideosListItem
                            name = {name}
                            date = {date}
                            image = {image}
                        /> 
                    </div>
                ))
            }
        </div>
    )
}

export default VideosList