import React from 'react'

import classes from './Introduction.module.css'
import profilePicture from '../../../images/profilePicture.jpg'

const introduction = () => (
    <div className={classes.Introduction}>
        <div className={classes.Header}>
            <h2>Hi, I'm Aretas!!!</h2>
            <h2>An information systems engineering student at Vilnius University, self-taught web developer</h2>
        </div>
        <div className={classes.Photo}>
            <img src={profilePicture} alt="Profile picture"/>
        </div>
    </div>
)

export default introduction;