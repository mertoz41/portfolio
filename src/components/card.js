import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { Link } from "gatsby"
import cardStyles from './card.module.css'
import { Button, Icon } from 'semantic-ui-react'


export class Card extends Component {
    state = {
        showProjects: false
    }
    toAbout = () =>{
        navigate('/about/')
    }
    projects = () =>{
        this.setState({
            showProjects: !this.state.showProjects
        })
    }
    render() {
        return (
            <div className={cardStyles.card}>
                <div className={cardStyles.name}>
                    <h1>
                        Mert Özkaynak
                    </h1>
                </div>
                {/* <div className={cardStyles.background}>
                    <img src={require('../images/griddo.png')} />
                </div> */}
                
                
                <div className={cardStyles.pic}>
                    <img src={require('../images/mert-cropped.jpg')} />
                </div>
                
                <div className={cardStyles.desc}>
                    <h3>
                        Full-Stack Web Developer
                    </h3>
                </div>
               
            </div>
        )
    }
}

export default Card
