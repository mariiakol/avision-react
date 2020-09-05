import React from 'react'
import StoriesData from './StoriesData'
import StoriesListItem from './StoriesListItem'

const StoriesList = () => {
    return (
        <div>
            <div className = "news-list">
                <div className = "column">
                    {
                        StoriesData.map(({
                            id,
                            name,
                            date,
                        }) => (
                            <div key = {id}>
                                <StoriesListItem
                                    name = {name}
                                    date = {date}
                                /> 
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StoriesList