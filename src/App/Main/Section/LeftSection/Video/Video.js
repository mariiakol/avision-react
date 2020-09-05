import React from 'react'
import News from '../News/News'

const Video = () => {
    return (
        <div className = "padding">
            <div className = "row">
                <div className = "col-md-3">
                <News
                        title =  "Most Popular Videos"
                    />
                </div>
            </div>
            <div className = "video-container row">
                <div className = "video">
                    <iframe width="590" height="500" src="https://www.youtube.com/embed/UjYemgbhJF0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Video