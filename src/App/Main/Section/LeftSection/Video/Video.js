import React from 'react'

const Video = () => {
    return (
        <div className = "padding">
            <div className = "row">
                <div className = "col-md-3">
                    <div className = "news">Most Popular Videos</div>
                    <div className = "line"></div>
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