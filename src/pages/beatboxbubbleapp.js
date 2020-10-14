import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'





export class Beatboxbubbleapp extends Component {
    render() {
        return (
            <div className={indexStyles.wrapper}>
                <div className={projectStyle.container}>
                    <div className={projectStyle.name}>
                        <h1>Beatbox Bubble App</h1>
                    </div>
                    <div className={projectStyle.code}>
                    <a href="https://github.com/mertoz41/beatbox-bubble" target="_blank">
                        <Button icon>
                            <Icon name="github" />
                        </Button>
                    </a>
                    </div>
                    <div className={projectStyle.video}>
                        <ReactPlayer className={projectStyle.player} url="https://vimeo.com/452664970" />
                    </div>
                    
                    <div className={projectStyle.desc}>
                        this is where the description about the project goes
                    </div>
                    <div className={projectStyle.stack}>
                        <h4>Stack</h4>
                    </div>
                </div>

                 
            </div>
        )
    }
}

export default Beatboxbubbleapp
