import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Aboutsect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.about}>
                    <p>I am a full-stack web developer with a background in international business studies and professional sports.
                        Always fascinated with computers, I have transitioned to programming to control them. 
                        Upon completing a 15-week software engineering bootcamp at the Flatiron School, I am specialized in Ruby and JavaScript frameworks.
                        As a full-stack, I enjoy working on the front-end to design and develop the user experience.
                        I am a curious developer, with a passion for problem solving and life-long learning.
                        I bring strong collaboration and communication skills from playing 4 years of college and a year of professional basketball. 
                    </p>
                </div>
            </div>
        )
    }
}

export default Aboutsect
