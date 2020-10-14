import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'


export class Hooperapp extends Component {
    render() {
        return (
            <div className={indexStyles.wrapper}>
                <div className={projectStyle.container}>
                    <div className={projectStyle.name}>
                        <h1>Hooper App</h1>
                    </div>
                    <div className={projectStyle.code}>
                        <Button icon>
                            <a href="https://github.com/mertoz41/hooper-front-end" target="_blank"><Icon name="github" /></a>
                        </Button>
                    </div>
                    <div className={projectStyle.video}>
                        <ReactPlayer className={projectStyle.player} url="https://vimeo.com/452664239" />
                    </div>
                    <div className={projectStyle.desc}>
                        <h4>Description</h4>
                        <p>
                            Designed for all basketball lovers, Hooper App brings users together by enabling its users to see all the basketball courts around them. it is a great app i honestly love it. right now experiencing how the div stretches inside the page and so far it is looking good. 
                        </p>
                    </div>
                    <div className={projectStyle.stack}>
                        <h4>Stack</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default Hooperapp
