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
                        <img src={require('../images/hooperlogo.png')} />
                        <h2>Hooper App</h2>
                        <p>Find new basketball courts, and competition around you.</p>
                    </div>
                    <div className={sectionStyle.project} onClick={() => this.toApp('beatboxbubbleapp')}>
                        <img src={require('../images/bbblogo.png')} />
                        <h2>Beatbox Bubble App</h2>
                        <p>Record, sample, and share your sound.</p>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Projectsect
