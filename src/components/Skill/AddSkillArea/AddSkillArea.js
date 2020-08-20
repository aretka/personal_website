import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './AddSkillArea.module.css'
import ModalButton from '../../UI/ModalButton/ModalButton'
import axios from '../../../axios-skills'
import * as actionTypes from '../../../store/actions'

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

    handleSubmit = event => {
        event.preventDefault();
        const skillData = {};
        for (let skillElement in this.state.skill) {
            skillData[skillElement] = this.state.skill[skillElement].value;
        }
        this.props.onAddedSkill(this.state.skill.name.value, this.state.skill.name.value, this.state.skill.description.value)
        axios.post( '/skills.json', skillData)
            .then( response => {
                console.log(response);
                this.props.history.push( '/personal_skills' );
            })
            .catch( error => {
                console.log(error);
            })
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
                <form onSubmit={this.handleSubmit}>
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
                    <ModalButton 
                        btnType="Danger" 
                        type="reset" 
                        clicked={this.props.onCancelAddingSkill}
                        >Cancel
                    </ModalButton>
                    <ModalButton 
                        btnType="Success" 
                        type="submit"  
                        disabled={!this.state.formIsValid}
                        >Continue
                    </ModalButton>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        skls: state.skills
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedSkill: (id, name, description) => dispatch({
            type: actionTypes.ADD_SKILL,
            id: id,
            name: name,
            description: description})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkillArea);