import React from 'react'

import classes from './Skill.module.css'
import Logo from '../Logo/Logo'
import removeLogo from '../../images/removeLogo.png'

const skill = ( props ) => (
    <div className={classes.Skill}>
        <div className={classes.Container}>
            <div className={classes.SkillHeader}>
                <div className={classes.Logo}>
                    <Logo logo={props.name}/>
                </div>
                <div className={classes.SkillName}>
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className={classes.RemoveLogo}>
                <div className={classes.Logo}>
                    <img onClick={props.clicked} className={classes.ButtonHover} src={removeLogo} alt='RemoveLogo'/>
                </div>
            </div>
        </div>
        <div className={classes.Descripion}>
            <p>{props.description}</p>
        </div>
    </div>
)
             
export default skill;