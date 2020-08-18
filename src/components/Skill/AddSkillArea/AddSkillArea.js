import React, { Component } from 'react'

import classes from './AddSkillArea.module.css'
import ModalButton from '../../UI/ModalButton/ModalButton'

class AddSkillArea extends Component {
    state = {
        skill: {
            name: {
                value: '',
                validation: {
                    required: true
                },
                touched: false,
                valid: false
            },
            description: {
                value: '',
                validation: {
                    required: true
                },
                touched: false,
                valid: false
            }
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedInputs = {
            ...this.state.skill
        };
        const updatedInputElement = {
            ...updatedInputs[inputIdentifier]
        };
        updatedInputElement.value = event.target.value;
        updatedInputElement.valid = this.checkValidity(updatedInputElement.value, updatedInputElement.validation);
        updatedInputElement.touched = true;
        updatedInputs[inputIdentifier] = updatedInputElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedInputs) {
            formIsValid = updatedInputs[inputIdentifier].valid && formIsValid
        }
        this.setState({skill: updatedInputs, formIsValid: formIsValid})
    }

    render () {
        return (
            <>
                <h3> Complete skill name and description </h3>
                <form>
                    <input 
                        className={classes.Input}
                        type='text'
                        placeholder='Skill name'
                        onChange={(event) => this.inputChangedHandler(event, 'name')}>
                    </input>
                    <input 
                        className={classes.Input}
                        type='text'
                        placeholder='Skill description'
                        onChange={(event) => this.inputChangedHandler(event, 'description')}>
                    </input>
                </form>
                <p>{this.state.skill.name.value}</p>
                <ModalButton btnType="Danger" clicked={this.props.onCancelAddingSkill}>Cancel</ModalButton>
                <ModalButton btnType="Success">Continue</ModalButton>
            </>
        )
    }
}

export default AddSkillArea;