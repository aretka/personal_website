import React from 'react'

import classes from './ModalButton.module.css'

const modalButton = ( props ) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
)

export default modalButton;