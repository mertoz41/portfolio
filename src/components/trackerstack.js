import React, { Component } from 'react'
import sectionStyle from './section.module.css'


export class Trackerstack extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.projectstack}>
                    <img src={require('../images/trackerstack.png')} />

                </div>
            </div>
        )
    }
}

export default Trackerstack
