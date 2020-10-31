import React from 'react'
import author from '../../../../../common/srcimages/author.jpg'
import './Author.css'

const Author = () => {
    return (
            <div className = "container-row row">
                <div className = "padding-page width100">
                   <div className = "row">
                        <div className = "author-post">
                            <div className = "author-information">
                                <img src={author} alt = "Post"/>
                                <div className = "meta">Katy Liu <span>Sep 29, 2017 at 9:48 am</span></div>
                            </div>
                            <div className = "share">
                                <div className = "share-text">SHARE</div>
                                <ul className = "share-menu">
                                    <li className="icon_facebook"><a href="/#"><i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
                                    <li className="icon_twitter"><a href="/#"><i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
                                    <li className="icon_google"><a href="/#"><i className="fa fa-google" aria-hidden="true"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
    )
}

export default Author