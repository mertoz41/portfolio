import React, { Component } from 'react'
import footerStyles from './footer.module.css'
import { Button, Icon } from 'semantic-ui-react'


export class Footer extends Component {

    toWeb = (web) =>{
        window.open(web, '_blank')
    }

    mailTo = () =>{
        window.location.href = "mailto:mertozka41@gmail.com"
    }
    render() {
        return (
            <div className={footerStyles.container}>
                <div className={footerStyles.buttons}>
                    <Button circular icon="github" onClick={() => this.toWeb('https://github.com/mertoz41')} />
                    <Button circular color="linkedin" icon="linkedin" onClick={() => this.toWeb('https://www.linkedin.com/in/mert-ozkaynak/')}/>
                    <Button circular icon="mail" onClick={() => this.mailTo()}/>
                </div>
            </div>
        )
    }
}

export default Footer
