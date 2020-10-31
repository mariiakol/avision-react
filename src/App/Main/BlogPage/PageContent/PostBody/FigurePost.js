import React from 'react'
import post from '../../../../../common/srcimages/post_image.jpg'

const FigurePost = () => {
    return (
        <div>
            <figure>
                <img src={post} alt = "Post"/>
                <figcaption>Lorem Ipsum Dolor Sit Amet</figcaption>
            </figure>
        </div>
    )
}

export default FigurePost