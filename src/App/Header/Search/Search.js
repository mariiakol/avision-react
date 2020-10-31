import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div>
            <div className = "row">
                <div className = "weather row horizontal-center">
                    <div className = "temperature">+10°</div>
                    <div className = "weather-image"></div>
                </div>
                <div>
                    <button className = "search-button"></button>
                    <input type="search" name="" className = "search" placeholder="Type to Search..."/>
                </div>  
            </div>
        </div>
    )
}

export default Search