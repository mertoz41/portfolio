import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Trackersect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.projectabout}>
                    <p>
                        Project Tracker App is a project development application that offers a backlog-oriented framework to manage and develop projects.
                        Influenced by Agile project management, development through user experience provides an insight as to which features to prioritize.
    
                    </p>
                </div>
            </div>
        )
    }
}

export default Trackersect