import React from 'react'

import reactLogo from '../../images/reactLogo.png'
import cssLogo from '../../images/cssLogo.png'
import javascriptLogo from '../../images/javascriptLogo.png'
import htmlLogo from '../../images/htmlLogo.jpg'
import cppLogo from '../../images/c++Logo.png'
import cSharpLogo from '../../images/cSharpLogo.png'
import phytonLogo from '../../images/phytonLogo.png'
import classes from './Logo.module.css'

const logo = ( props ) => {
    let Logo = null;
    switch (props.logo) {
        case "CSS": 
            Logo = <img src={cssLogo} alt="Logo"></img>
            break;
        case "React":
            Logo = <img src={reactLogo} alt="Logo"></img>
            break;
        case "Javascript":
            Logo = <img src={javascriptLogo} alt="Logo"></img>
            break;
        case 'HTML':
            Logo = <img src={htmlLogo} alt="Logo"></img>
            break;
        case 'C++':
            Logo = <img src={cppLogo} alt="Logo"></img>
            break;
        case 'C#':
            Logo = <img src={cSharpLogo} alt="Logo"></img>
            break;
        case 'Phyton':
            Logo = <img src={phytonLogo} alt="Logo"></img>
            break;
        default:
            Logo = <img src={reactLogo} alt="Logo"></img>
    }

    return (
        <div className={classes.Logo}>
            {Logo}
        </div>
    )
}

export default logo;