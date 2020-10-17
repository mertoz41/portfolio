import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Hoopersect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.projectabout}>
                    <p>
                        Hooper App is a social networking service that pivots around the most beautiful sport in the world, basketball.
                        It is created for hoopers to explore new basketball courts, find the best competition, and to connect with other hoopers with respect to the game itself.

                        
                    </p>
                </div>
            </div>
        )
    }
}

export default Hoopersect
