import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Button.module.css';

const button = ( props ) => (
    <button className={classes.Button} >
        <div className={classes.Circle}></div>
        <NavLink 
            onClick={props.clicked}
            to={props.link} 
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </button>
) 

export default button;