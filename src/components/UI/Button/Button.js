import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Button.module.css';

const button = ( props ) => (
    <button className={classes.Button} onClick={props.clicked}>
        <div className={classes.Circle}></div>
        <NavLink 
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </button>
) 

export default button;