import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className = "row">
            <form className = "form">
                <input type="email" name="" placeholder="Your Email"/>
                <button className = "arrow-send">⟶</button>
            </form>
        </div>
    )
}

export default Form