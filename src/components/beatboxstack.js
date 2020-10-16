import React, { Component } from 'react'
import sectionStyle from './section.module.css'


export class Beatboxstack extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.main}>
                    <img src={require('../images/bbb-stack.png')} />

                </div>
            </div>
        )
    }
}

export default Beatboxstack
