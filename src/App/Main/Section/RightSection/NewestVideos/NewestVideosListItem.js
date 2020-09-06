import React from 'react'
import './NewestVideosListItem.css'

const NewestVideosListItem = ({
    name,
    date,
    image
}) => {
    return (
        <div>
            <div className = "side-post round">
                <div className = "row">
                    <div className = "col-md-3">
                        <div className = "side-post-image">
                            <img src={image} />
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
        </div>
    )
}

export default NewestVideosListItem