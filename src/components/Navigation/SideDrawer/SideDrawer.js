import React from 'react'

import Aux from '../../../hoc/Auxi/Auxi'
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
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes.SideDrawer + ' ' + attatchedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div>
                    <NavigationItems clicked={props.closed}/>
                </div>
            </div>
        </Aux>
    )
}

export default sideDrawer;