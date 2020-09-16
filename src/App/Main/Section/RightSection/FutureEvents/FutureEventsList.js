import React from 'react'
import FutureEventsListItem from './FutureEventsListItem'
import FutureEventsData from './FutureEventsData'

const FutureEventsList = () => {
    return (
        <div className = "news-list margin-list">
			<div className = "column">
                {
                    FutureEventsData.map(({
                        id,
                        day,
                        month,
                        name,
                        date,
                        image
                    }) => (
                        <div key = {id}>
                            <FutureEventsListItem
                                day = {day}
                                month = {month}
                                name = {name}
                                date = {date}
                                image = {image}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FutureEventsList