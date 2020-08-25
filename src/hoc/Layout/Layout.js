import React, { Component } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Footer from '../../components/Navigation/Footer/Footer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => ({ showSideDrawer: !prevState.showSideDrawer }))
    }
    render () {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;