import React from 'react'
import './StoriesListItem.css'

const StoriesListItem = ({
    name, 
    date,
    image
}) => {
    return (
        <div className = "side-post">
            <div className = "row">
                <div className = "col-md-3">
                    <div className = "side-post-image">
                        <img src={image} alt="Stories post"/>
                    </div>
                </div>
                <div className = "col-md-9">
                    <div className = "video-information">
                        <p className = "post-name">{name}</p>
                        <p className = "video-date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesListItem