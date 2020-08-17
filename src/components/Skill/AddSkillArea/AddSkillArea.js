import React, { Component } from 'react'

import classes from './AddSkillArea.module.css'
import ModalButton from '../../UI/ModalButton/ModalButton'

class AddSkillArea extends Component {
    state = {
        skill: {
            name: {
                value: '',
            },
            description: {

            }
        }
    }

    render () {
        return (
            <>
                <h3> Complete skill name and description </h3>
                <form>
                    <input 
                        className={classes.Input}
                        type='text'
                        placeholder='Skill name'>
                    </input>
                    <input 
                        className={classes.Input}
                        type='text'
                        placeholder='Skill description'>
                    </input>
                </form>
                <ModalButton btnType="Danger" clicked={this.props.onCancelAddingSkill}>Cancel</ModalButton>
                <ModalButton btnType="Success">Continue</ModalButton>
            </>
        )
    }
}

export default AddSkillArea;