import React from 'react'
import Slider from '../Slider/Slider'
import Section from '../Section/Section'

const MainContent = ({
    likeArticle
}) => {
    return (
        <div>
            <Slider/>
            <Section
                likeArticle = {likeArticle}
            /> 
        </div>
    )
}

export default MainContent