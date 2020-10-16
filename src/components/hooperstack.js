import React, { Component } from 'react'
import sectionStyle from './section.module.css'


export class Hooperstack extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.main}>
                    <img src={require('../images/hooper-stack.png')} />

                </div>
            </div>
        )
    }
}

export default Hooperstack
