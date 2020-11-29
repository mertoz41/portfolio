import React, { Component } from 'react'
import sectionStyle from './section.module.css'

export class Aboutsect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                <div className={sectionStyle.about}>

                    
                    <p>Born and raised in Izmir, Turkey, I came to the US in 2010, 
                        seeking to continue my education as a student-athlete. 
                        Upon graduating from T.C. Williams High School in 2014 and 
                        Thiel College in 2018 with a bachelors degree in International Business studies, 
                        I played professional basketball for a year with Sigortam Net ITU Basket in Istanbul. 
                        In 2020, I pursued my passion for technology by attending a software engineering 
                        bootcamp at Flatiron School to learn full-stack web development. So far it has 
                        been a smooth transition as I channel the discipline and work ethic gained from 
                        basketball into this nonstop evolving industry. I spend most of my time working 
                        on projects, studying computer science fundamentals, and adopting new technologies 
                        in quest to mastery.                     
                    </p>
                </div>
            </div>
        )
    }
}

export default Aboutsect
