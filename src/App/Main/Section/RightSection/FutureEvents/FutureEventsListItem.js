import React from 'react'
import './FutureEventsListItem.css'

const FutureEventsListItem = ({
    day,
    month,
    name,
    date
}) => {
    return (
        <div className = "side-post round">
            <div className = "row">
                <div className = "col-md-3">
                    <div className = "side-post-date">
                        <div className = "event-day">{day}</div>
                        <div className = "event-month">{month}</div>
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

export default FutureEventsListItem