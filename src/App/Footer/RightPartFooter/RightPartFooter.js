import React from 'react'
import './RightPartFooter.css'
import Form from './Form/Form'

const RightPartFooter = () => {
    return (
        <div className = "row">
            <div className = "black-bg">
                <div className = "content1">
                    <div className = "row">
                        <div className = "news white">Subscribe</div>
                    </div>
                    <div className = "row">
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPartFooter