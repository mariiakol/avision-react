import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div>
            <form className = "post-form">
                <div className = "space-between">
                    <input type="text" name="" placeholder="Your Name"/>
                    <input type="email" name="" placeholder="Your E-mail"/>
                </div>
                <div className = "row">
                    <textarea placeholder="Your Comment"></textarea>
                </div>
                <div className = "row">
                    <button className = "post-button" type="submit">Post Comment</button>
                </div>
            </form>
        </div>
    )
}

export default Form