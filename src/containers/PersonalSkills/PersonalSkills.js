import React, { Component } from 'react'

import classes from './PersonalSkills.module.css'
import Background from '../../components/UI/Background/Background'
import ContentSection from '../../components/UI/ContentSection/ContentSection'
import Skill from '../../components/Skill/Skill'
import ModalButton from '../../components/UI/ModalButton/ModalButton'
import Modal from '../../components/UI/Modal/Modal'
import AddSkillArea from '../../components/Skill/AddSkillArea/AddSkillArea'

class PersonalSkills extends Component {
    state = {
        skills: [
            {
                id: 1,
                name: 'React',
                description: 'Some info about this skill. Experience, projects developed by this language.'
            },
            {
                id: 2,
                name: 'CSS',
                description: 'Some info about this skill. Experience, projects developed by this language.'
            },
            {
                id: 3,
                name: 'Javascript',
                description: 'Some info about this skill. Experience, projects developed by this language.'
            },
            {
                id: 4,
                name: 'HTML',
                description: 'Some info about this skill. Experience, projects developed by this language.'
            },
            {
                id: 5,
                name: 'C++',
                description: 'Some info about this skill. Experience, projects developed by this language.'
            }
        ],
        addingSkill: false
    }
    
    onAddSkill = () => {
        this.setState({ addingSkill: true })
    }

    onCancelAddingSkill = () => {
        this.setState({ addingSkill: false })
    }

    render () {

        let skillsArray = (
            <div className={classes.Skills}>
                {this.state.skills.map(element => (
                    <Skill 
                        key={element.id}
                        name={element.name}
                        description={element.description}
                    />
                ))}
            </div>
        )
        return (
            <>
                <Modal show={this.state.addingSkill} modalClosed={this.onCancelAddingSkill}>
                    <AddSkillArea onCancelAddingSkill={this.onCancelAddingSkill}/>
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

export default PersonalSkills;