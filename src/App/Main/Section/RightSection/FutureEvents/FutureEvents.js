import React from 'react'
import Title from '../Title/Title'
import FutureEventsList from './FutureEventsList'

const FutureEvents = () => {
    return (
        <div className = "padding">
            <Title
                title = "Future Events"
            />
            <FutureEventsList/>
        </div>
    )
}

export default FutureEvents