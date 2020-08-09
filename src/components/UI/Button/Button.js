import React from 'react';

import classes from './Button.module.css';

const button = ( props ) => (
    <button className={classes.Button} onClick={props.clicked}>
        <div className={classes.Circle}></div>
        <a href="/">{props.children}</a>
    </button>
) 

export default button;