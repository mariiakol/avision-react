import React from 'react'
import NewestVideosListItem from './NewestVideosListItem'
import NewestVideosData from './NewestVideosData'

const NewestVideosList = () => {
    return (
        <div className = "news-list">
			<div className = "column">
                {
                    NewestVideosData.map(({
                        id,
                        name, 
                        date,
                        image
                    }) => (
                        <div key = {id}>
                            <NewestVideosListItem
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

export default NewestVideosList