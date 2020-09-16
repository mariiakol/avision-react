import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            {/* <a href="#" className = "logo">AVISION</a> */}
            <Link to = "/" className = "logo">AVISION</Link>
        </div>
    )
}

export default Logo