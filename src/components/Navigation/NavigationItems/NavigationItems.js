import React from 'react'

import Button from '../../UI/Button/Button'
import classes from './NavigationItems.module.css'

const navigationItems = ( props ) => (
    <div className={classes.NavigationItems}>
        <Button clicked={props.clicked}>ABOUT ME</Button>
        <Button clicked={props.clicked}>PERSONAL SKILLS</Button>
        <Button clicked={props.clicked}>GALLERY</Button>
    </div>
)

export default navigationItems;