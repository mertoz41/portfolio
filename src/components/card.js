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
                <div className={cardStyles.code}>
                        <Button icon>
                            <a href="https://github.com/mertoz41" target="_blank"><Icon name="github" /></a>
                        </Button>
                        <Button icon>
                            <a href="https://www.linkedin.com/in/mert-ozkaynak/" target="_blank"><Icon name="linkedin"/></a>
                        </Button>
                </div>
                
                <div className={cardStyles.pic}>
                    <img src={require('../images/mert-cropped.jpg')} />
                </div>
                <div className={cardStyles.desc}>
                    <p>
                        Full-Stack Web Developer
                    </p>
                </div>
                <div className={cardStyles.about}>
                    <h1>About</h1>
                    <p>
                        I am a full-stack web developer with a background in international business studies and professional sports.
                    </p>
                </div>
                <div className={cardStyles.projects}>
                    <h1>Projects</h1>
                    <Link to="/hooperapp"><h4>Hooper App</h4></Link>
                    <Link to="/beatboxbubbleapp"><h4>Beatbox Bubble App</h4></Link>
        
                </div>
                {/* <div className={cardStyles.buttons}>
                    <button onClick={this.projects}>Projects</button>
                </div> */}
                {/* {this.state.showProjects ? 
                <div className={cardStyles.projects}>
                        <Link to="/beatboxbubbleapp">Beatbox Bubble App</Link>
                        <br/>
                        
                        <Link to="/hooperapp">Hooper App</Link>
                    
                </div>
                :
                null
                    } */}

                
                
            </div>
        )
    }
}

export default Card
