import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className = "navigation hidden-menu">
                <ul className = "menu" id = "nav">
                    <li><a href="#" className = "link">Home</a></li>
                    <li><a href="#" className = "link">Fashion</a></li>
                    <li><a href="#" className = "link">Gadgets</a></li>
                    <li><a href="#" className = "link">Lifestyle</a></li>
                    <li><a href="#" className = "link">Video</a></li>
                    <li><a href="#" className = "link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu