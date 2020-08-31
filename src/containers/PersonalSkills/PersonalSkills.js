import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import classes from './PersonalSkills.module.css'
import Background from '../../components/UI/Background/Background'
import ContentSection from '../../components/UI/ContentSection/ContentSection'
import Skill from '../../components/Skill/Skill'
import ModalButton from '../../components/UI/ModalButton/ModalButton'
import Modal from '../../components/UI/Modal/Modal'
import AddSkillArea from '../../components/Skill/AddSkillArea/AddSkillArea'
import RemoveSkillArea from '../../components/Skill/RemoveSkillArea/RemoveSkillArea'
import axios from '../../axios-skills'
import * as actionTypes from '../../store/actions'

class PersonalSkills extends Component {
    state = {
        addingSkill: false,
        removingSkill: false
    }
    
    onAddSkill = () => {
        this.props.history.replace( '/personal_skills/add_skill' )
        this.setState({ addingSkill: true })
    }

    onCancelAddingSkill = () => {
        this.props.history.push('/personal_skills');
        this.setState({ addingSkill: false })
    }

    onRemoveSkill = (id) => {
        this.props.onAddedRemovingSkillID(id);
        this.setState({ removingSkill: true })
    }

    onConfirmRemovingSkill = () => {
        this.props.onRemovedSkill();
        this.setState({ removingSkill: false })
    }

    onCancelRemovingSkill = () => {
        this.setState({ removingSkill: false })
    }

    componentDidMount() {
        if (this.props.loadedSkills)
            return true;

        axios.get( '/skills.json' )
            .then(res => {
                console.log(res)
                for (let key in res.data) {
                    this.props.onAddedSkill(key, res.data[key].name, res.data[key].description)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render () {
        let skillsArray = (
            <div className={classes.Skills}>
                {this.props.skls.map(element => (
                    <Skill 
                        clicked={() => this.onRemoveSkill(element.id)}
                        key={element.id}
                        name={element.name}
                        description={element.description}
                    />
                ))}
            </div>
        )
        return (
            <>
                <Route 
                    path={this.props.match.path + '/add_skill'}
                    render={(props) => (
                        <Modal show={this.state.addingSkill} >
                            <AddSkillArea onCancelAddingSkill={this.onCancelAddingSkill} {...props}/>
                        </Modal>
                        )} 
                />
                <Modal show={this.state.removingSkill} modalClosed={this.onCancelRemovingSkill}>
                        <RemoveSkillArea 
                            onCancelRemovingSkill={this.onCancelRemovingSkill}
                            onConfirmRemovingSkill={this.onConfirmRemovingSkill}
                            />
                </Modal>
                <Background>
                    <ContentSection>
                        <div className={classes.Container}>
                            <h2>Personal Skills</h2>    
                            {skillsArray}
                        </div>  
                        <div className={classes.Button}>
                            <ModalButton clicked={this.onAddSkill}>ADD SKILL</ModalButton>
                        </div>
                    </ContentSection>
                </Background>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        skls: state.skills,
        loadedSkills: state.loadedSkills
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedSkill: (id, name, description) => dispatch({
            type: actionTypes.ADD_SKILL,
            id: id,
            name: name,
            description: description}),
        onAddedRemovingSkillID: (id) => dispatch({
            type: actionTypes.ADD_REMOVING_SKILL_ID,
            skillID: id
        }),
        onRemovedSkill: () => dispatch({
            type: actionTypes.REMOVE_SKILL
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSkills);