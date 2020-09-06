import React from 'react'
import './VideosListItem.css'


const VideosListItem = ({
    name,
    date,
    image
}) => {
    return (
        <div className = "video-list-item">
            <div className = "row">
                <div className = "col-md-2">
                    <div className = "video-image">
                        <img src={image}/>
                        <div className = "play-icon"></div>
                    </div>
                </div>
                <div className = "col-md-9">
                    <div className = "video-information">
                        <p className = "video-name">{name}</p>
                        <p className = "video-date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideosListItem