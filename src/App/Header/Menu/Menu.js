import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className = "navigation hidden-menu">
                <ul className = "menu" id = "nav">
                    <li>
                        <a href="#" className = "link">Home</a>
                    {/* <Link to = "/BlogPage" className = "go-to-topic link">Home</Link> */}
                    </li>
                    <li><a href="#" className = "link">Fashion</a></li>
                    <li><a href="#" className = "link">Gadgets</a></li>
                    <li><a href="#" className = "link">Lifestyle</a></li>
                    {/* <li><a href="#" className = "link">Liked Articles</a></li> */}
                    <Link to = "/LikedArticles" className = "link">Liked</Link>
                    <li><a href="#" className = "link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu