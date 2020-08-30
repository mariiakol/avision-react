import React from 'react'
import Logo from '../../Header/Logo/Logo'
import './LeftPartFooter.css'

const LeftPartFooter = () => {
    return (
        <div className = "content">
                <div className = "footer-logo">
                    <Logo/>
                </div>
                <div className = "footer-social">
                    <ul className = "footer-menu">
                        <li className="footer_social_facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li className="footer_social_twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li className="footer_social_pinterest"><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li className="footer_social_vimeo"><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                        <li className="footer_social_instagram"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li className="footer_social_google"><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            <div className = "copyright">Copyright ©2020 All rights reserved | This  template is made with ♡ by <span className = "blue">Colorlib</span></div>
        </div>
    )
}

export default LeftPartFooter