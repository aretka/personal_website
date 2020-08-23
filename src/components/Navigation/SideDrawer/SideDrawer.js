import React from 'react'

import Backdrop from '../../UI/Backdrop/Backdrop'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'

const sideDrawer = ( props ) => {
    let attatchedClasses = [classes.Close];
    if (props.open) {
        attatchedClasses = [classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes.SideDrawer + ' ' + attatchedClasses}>
                <div className={classes.Logo}>
                    <Logo logo='React'/>
                </div>
                <div>
                    <NavigationItems clicked={props.closed}/>
                </div>
            </div>
        </>
    )
}

export default sideDrawer;