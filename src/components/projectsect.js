import { navigate } from 'gatsby'
import React, { Component } from 'react'
import sectionStyle from './section.module.css'


export class Projectsect extends Component {
    toApp = (destination) =>{
        navigate(`/${destination}`)
    }
    toArtstone = () => {

    }
    render() {
        return (
            <div className={sectionStyle.container}>
               
                <div className={sectionStyle.main}>
                    <a href="https://www.theartstone.com" target="_blank">
                    <div className={sectionStyle.project}>
                        <h2>Art Stone Marble & Granite</h2>
                        <h4>Official website of marble and granite fabricator and installer.</h4>
                    </div>
                    </a>
                    <div className={sectionStyle.project} onClick={() => this.toApp('hooperapp')}>
                        <h2>Hooper App</h2>
                        <h4>An app for basketball lovers to discover new courts and competition.</h4>
                    </div>
                    <div className={sectionStyle.project} onClick={() => this.toApp('beatboxbubbleapp')}>
                        <h2>Beatbox Bubble App</h2>
                        <h4>An app for music lovers to sample and share their sounds.</h4>
                    </div>
                    <div className={sectionStyle.project} onClick={() => this.toApp('trackerapp')}>
                        <h2>Project Tracker App</h2>
                        <h4>Backlog-oriented framework for managing and developing projects.</h4>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Projectsect
