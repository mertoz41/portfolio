import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'
import Footer from '../components/footer'
import HooperSect from '../components/hoopersect'
import ProjectStack from '../components/projectstack'
import ProjectTabs from '../components/projecttabs'
import {navigate} from 'gatsby'


export class Hooperapp extends Component {
    state = {
        activeItem: "description"
    }

    changeView = (name) => {
        this.setState({activeItem: name})
         
    }

    toHome = () =>{
        navigate('/')

    }
    render() {
        return (
            <div className={indexStyles.wrapper}>
                <div className={projectStyle.container}>
                    <div className={projectStyle.name}>
                        <h1>
                            Hooper App
                        </h1>
                        <Button circular icon="home" onClick={() => this.toHome()}/>

                    </div>
                    {/* <div className={projectStyle.code}>
                        <Button icon>
                            <a href="https://github.com/mertoz41/hooper-front-end" target="_blank"><Icon name="github" /></a>
                        </Button>
                    </div> */}
                </div>
                <div className={projectStyle.video}>
                    <ReactPlayer className={projectStyle.player} url="https://vimeo.com/452664239" />
                </div>
                <div className={projectStyle.rest}>

                
                    <ProjectTabs changeView={this.changeView}/>
                    {this.state.activeItem == "description" ? 
                    <HooperSect />
                    :
                    <ProjectStack />
                    }
                </div>

                <Footer />

            </div>
        )
    }
}

export default Hooperapp
