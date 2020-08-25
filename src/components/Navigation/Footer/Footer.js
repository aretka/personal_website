import React from 'react'

import classes from './Footer.module.css'
import Logo from '../../Logo/Logo'
import facebookLogo from '../../../images/facebookLogo.png'
import linkedinLogo from '../../../images/linkedinLogo.png'
import gmailLogo from  '../../../images/gmailLogo.png'

const footer = () => (
    <div className={classes.Footer}>
        <a className={classes.Logo} rel="noopener noreferrer" target="_blank" href='https://www.facebook.com/aretas.zarnauskas.1/'>
            <img className={classes.Img} src={facebookLogo}/>
        </a>
        <a className={classes.Logo} rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/aretas-žarnauskas-839a641b3'>
            <img className={classes.Img} src={linkedinLogo}/>
        </a>
        <a className={classes.Logo} rel="noopener noreferrer" target="_blank" href='mailto:aretaszarnauskas@gmail.com'>
            <img className={classes.Img} src={gmailLogo}/>
        </a>
    </div>
)

export default footer;