import React from 'react'
import LeftPartFooter from './LeftPartFooter/LeftPartFooter.js'
import './Footer.css'
import RightPartFooter from './RightPartFooter/RightPartFooter.js'

const Footer = () => {
    return (
        <footer id = "footer">
            <div className = "container">
                <div className = "row footer-row">
                        <div className = "col-md-9 footer-width">
                            <LeftPartFooter/>
                        </div>
                        <div className = "col-md-3 footer-width">
                            <RightPartFooter/>
                        </div>
                </div>
            </div> 
        </footer>
 
    )
}

export default Footer