import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import cssLogo from '../../images/cssLogo.png'
import reactLogo from '../../images/reactLogo.png'
import classes from './Gallery.module.css'

class Gallery extends Component {
    render () {
        return (
            <div className={classes.Slider}>
                <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true}>
                    <div>
                        <img src={cssLogo} alt="pic"></img>
                    </div>
                    <div>
                        <img src={reactLogo} alt="pic"></img>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Gallery;