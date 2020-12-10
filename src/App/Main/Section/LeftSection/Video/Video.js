import React from 'react'
import './Video.css'
import VideosList from './VideosList'

const Video = () => {
    return (
        <div className = "padding">
            <div className = "row">
                <div className = "col-md-3">
                {/* <News
                        title =  "Most Popular Videos"
                    /> */}
                </div>
            </div>
            <div className = "video-container row">
                <div className = "video">
                    <iframe title = "Video" width="590" height="500" src="https://www.youtube.com/embed/UjYemgbhJF0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <VideosList/>
            </div>
        </div>
    )
}

export default Video