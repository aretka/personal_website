import React from 'react'

import classes from './RemoveSkillArea.module.css'
import ModalButton from '../../UI/ModalButton/ModalButton'

const removeSkill = ( props ) => {
    return (
        <div>
            <h3 className={classes.Heading}>Are you sure you want to delete this skill?</h3>            
            <ModalButton btnType='Danger' clicked={props.onCancelRemovingSkill}>No</ModalButton>
            <ModalButton btnType='Success'>Yes</ModalButton>
        </div>
        )
}

export default removeSkill;