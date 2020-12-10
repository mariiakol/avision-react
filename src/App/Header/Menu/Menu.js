import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <nav className = "navigation hidden-menu">
                <ul className = {menuActive === true ? 'menu active' : 'menu'} id = "nav">
                    <li>
                        <a href="/#" className = "link">Home</a>
                    </li>
                    <li><a href="/#" className = "link">Fashion</a></li>
                    <li><a href="/#" className = "link">Gadgets</a></li>
                    <li><a href="/#" className = "link">Lifestyle</a></li>
                    <Link to = "/LikedArticles" className = "link">Favorites</Link>
                    <li><a href="/#" className = "link">Contact</a></li>
                </ul>
            </nav>
            <div className = "nav-mobile-menu" onClick = {() => setMenuActive(!menuActive)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Menu