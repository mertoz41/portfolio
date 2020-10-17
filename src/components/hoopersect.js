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
                        This app has came to life as I wanted to discover how to utilize Google Maps API in React. 
                        
                    </p>
                </div>
            </div>
        )
    }
}

export default Hoopersect
