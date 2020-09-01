import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import image1 from '../../images/IMG1.png'
import image2 from '../../images/IMG2.png'
import image3 from '../../images/IMG3.png'
import image4 from '../../images/IMG4.png'
import classes from './Slider.module.css'

const slider = () => (
    <div className={classes.Container}>
        <div className={classes.Slider}>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={image1} alt="pic1"></img>
                </div>
                <div>
                    <img src={image2} alt="pic2"></img>
                </div>
                <div>
                    <img src={image4} alt="pic3"></img>
                </div>
                <div>
                    <img src={image3} alt="pic4"></img>
                </div>
            </Carousel>
        </div>
    </div>
)

export default slider;