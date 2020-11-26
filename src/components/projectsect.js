import { navigate } from 'gatsby'
import React, { Component } from 'react'
import sectionStyle from './section.module.css'


export class Projectsect extends Component {
    toApp = (destination) =>{
        navigate(`/${destination}`)
    }
    render() {
        return (
            <div className={sectionStyle.container}>
               
                <div className={sectionStyle.main}>
                    <div className={sectionStyle.project} onClick={() => this.toApp('hooperapp')}>
                        {/* <img src={require('../images/hooperlogo.png')} /> */}
                        <h2>Hooper App</h2>
                        <h4>An app for basketball lovers to discover new courts and competition.</h4>
                    </div>
                    <div className={sectionStyle.project} onClick={() => this.toApp('beatboxbubbleapp')}>
                        {/* <img src={require('../images/bbblogo.png')} /> */}
                        <h2>Beatbox Bubble App</h2>
                        <h4>An app for music lovers to sample and share their sounds.</h4>
                    </div>
                    <div className={sectionStyle.project} onClick={() => this.toApp('trackerapp')}>
                        {/* <img src={require('../images/hooperlogo.png')} /> */}
                        <h2>Project Tracker App</h2>
                        <h4>Backlog-oriented framework for managing and developing projects.</h4>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Projectsect
