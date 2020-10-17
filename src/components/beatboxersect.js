import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Beatboxersect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.projectabout}>
                    <p> 
                        Beatbox Bubble App is a social networking service that connects users through their own music.
                        It is created for users to get creative sampling, composing, and sharing their sounds with other users.
                    </p>
                </div>
            </div>
        )
    }
}

export default Beatboxersect
