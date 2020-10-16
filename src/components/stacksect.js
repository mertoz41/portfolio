import React, { Component } from 'react'
import sectionStyle from './section.module.css'
import { Button, Icon } from 'semantic-ui-react'



export class Stacksect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.main}>
                    Tech stack will go here
                
                </div>
            </div>
        )
    }
}

export default Stacksect
