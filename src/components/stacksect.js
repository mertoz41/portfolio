import React, { Component } from 'react'
import sectionStyle from './section.module.css'
import { Button, Icon } from 'semantic-ui-react'



export class Stacksect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.stack}>
                <img src={require('../images/mert-tech-stack.png')} />                
                </div>
            </div>
        )
    }
}

export default Stacksect
