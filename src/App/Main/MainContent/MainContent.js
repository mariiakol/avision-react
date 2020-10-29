import React from 'react'
import Slider from '../Slider/Slider'
import Section from '../Section/Section'

const MainContent = ({
    likeArticle,
    removeArticle
}) => {
    return (
        <div>
            <Slider/>
            <Section
                likeArticle = {likeArticle}
                removeArticle = {removeArticle}
            /> 
        </div>
    )
}

export default MainContent