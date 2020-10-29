import React from 'react'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import '../../../common/style/reset.css'
import '../../../common/common-styles.css'
import './Section.css'

const Section  = ({
    likeArticle,
    removeArticle
}) => {
    return (
        <div>
           <section id = "section">
               <div className = "container">
                    <div className = "container-row row">
                        <div className = "col-md-9 padding">
                            <LeftSection 
                            likeArticle = {likeArticle}
                            removeArticle = {removeArticle}
                            />
                        </div>
                        <div className = "col-md-3 center">
                            <RightSection/>
                        </div>
                    </div>
                </div> 
            </section> 
        </div>
        )
}

export default Section