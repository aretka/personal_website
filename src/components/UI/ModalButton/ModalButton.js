import React from 'react'

import classes from './ModalButton.module.css'

const modalButton = ( props ) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}
        type={props.type}>{props.children}
    </button>
)

export default modalButton;