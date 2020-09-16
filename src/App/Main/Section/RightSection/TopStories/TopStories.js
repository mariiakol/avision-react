import React, {Component} from 'react'
import Title from '../Title/Title'
import StoriesList from './Stories/StoriesList'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderSlick.css'

export default class SimpleSlider extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <div>
                <Title
                     title = "Top Stories"
                />
              <Slider {...settings}>
                <div>
                    <StoriesList/>
                </div>
                <div>
                    <StoriesList/>
                </div>
                <div>
                    <StoriesList/>
                </div>
              </Slider>
            </div>
          );
    }
}
