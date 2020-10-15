import React, { Component } from 'react'
import sectionStyle from './section.module.css'
import { Button, Icon } from 'semantic-ui-react'



export class Contactsect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                experimenting contact sect
                <Button icon>
                    <a href="https://github.com/mertoz41" target="_blank"><Icon name="github" /></a>
                </Button>
                <Button icon>
                    <a href="https://www.linkedin.com/in/mert-ozkaynak/" target="_blank"><Icon name="linkedin"/></a>
                </Button>
            </div>
        )
    }
}

export default Contactsect
