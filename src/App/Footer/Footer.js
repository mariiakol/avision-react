import React from 'react'
import LeftPartFooter from './LeftPartFooter/LeftPartFooter.js'
import './Footer.css'

const Footer = () => {
    return (
        <footer id = "footer">
            <div className = "container">
                <div className = "row footer-row">
                        <div className = "col-md-9 footer-width">
                            <LeftPartFooter/>
                        </div>
                        <div className = "col-md-3 footer-width"></div>
                </div>
            </div> 
        </footer>
 
    )
}

export default Footer