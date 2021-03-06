import React, { Component } from 'react'
import tabStyles from './tabs.module.css'


export class Tabs extends Component {
    state = { activeItem: 'about' } 
    handleItemClick = (name) => {
        this.setState({ activeItem: name })
        this.props.changeView(name)
        // {"tab " + (this.state.activeItem === 'about' ? 'active' : "")} 
    }

    render() {
        return (
            <div className={tabStyles.container}>
                
                <div className={tabStyles.nuTabs}>
                <h3 className={(this.state.activeItem === 'about' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('about')}>About</h3>
                <h3 className={(this.state.activeItem === 'projects' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('projects')}>Projects</h3>
                <h3 className={(this.state.activeItem === 'stack' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('stack')}>Tech Stack</h3>
                </div>
                

                
            </div>
        )
    }
}

export default Tabs
