import React from 'react'

import classes from './AboutMe.module.css'
import Slider from '../../components/Slider/Slider'
import Introduction from './Introduction/Introduction'
import Bio from './Bio/Bio'
import Background from '../../components/UI/Background/Background'
import ContentSection from '../../components/UI/ContentSection/ContentSection'

const aboutMe = () => (
    <div className={classes.AboutMe}>
        <Slider />
        <Background>
            <ContentSection>
                <h2>About me</h2>
                <Introduction />
                <div className={classes.Container}>
                    <div className={classes.Line}>
                    </div>
                </div>
                <Bio />
            </ContentSection>
        </Background>
    </div>
)

export default aboutMe;