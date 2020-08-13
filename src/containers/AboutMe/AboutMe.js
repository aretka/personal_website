import React from 'react'

import classes from './AboutMe.module.css'
import Introduction from './Introduction/Introduction'
import Bio from './Bio/Bio'
import Background from '../../components/UI/Background/Background'
import ContentSection from '../../components/UI/ContentSection/ContentSection'

const aboutMe = () => (
    <div className={classes.AboutMe}>
        <Background>
            <ContentSection>
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