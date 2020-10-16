import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Beatboxersect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.main}>
                    <p>I am a full-stack web developer with a background in international business studies and professional sports.
                    I am looking for front-end positions as I enjoy designing and developing the user experience.
                    My current stack consists of Ruby and JavaScript frameworks, as I am constantly adopting new frameworks and open source libraries. 
                    </p>
                </div>
            </div>
        )
    }
}

export default Beatboxersect
