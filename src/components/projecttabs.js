import React, { Component } from 'react'
import tabStyles from './tabs.module.css'


export class Projecttabs extends Component {
    state = { activeItem: 'description' } 
    handleItemClick = (name) => {
        this.setState({ activeItem: name })
        this.props.changeView(name)
        // {"tab " + (this.state.activeItem === 'about' ? 'active' : "")} 
    }
    render() {
        return (
            <div className={tabStyles.project}>
                
                <div className={tabStyles.proTabs}>
                <h3 className={(this.state.activeItem === 'description' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('description')}>Description</h3>
                <h3 className={(this.state.activeItem === 'stack' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('stack')}>Stack</h3>
                </div>
                

                
            </div>
        )
    }
}

export default Projecttabs
