import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import tabStyles from './tabs.module.css'


export class Tabs extends Component {
    state = { activeItem: 'about' } 
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        return (
            <div className={tabStyles.container}>
                <Menu secondary className={tabStyles.tabs}>
                    <Menu.Item
                    name='about'
                    active={this.state.activeItem === 'about'}
                    onClick={this.handleItemClick}
                    />
                    |              |
                    |   |
                    <Menu.Item
                    name='projects'
                    active={this.state.activeItem === 'projects'}
                    onClick={this.handleItemClick}
                    />
                </Menu>
                
            </div>
        )
    }
}

export default Tabs
