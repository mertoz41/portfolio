import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'
import Footer from '../components/footer'
import HooperSect from '../components/hoopersect'
import HooperStack from '../components/hooperstack'
import ProjectTabs from '../components/projecttabs'
import {navigate} from 'gatsby'


export class Hooperapp extends Component {
    state = {
        activeItem: "description"
    }

    changeView = (name) => {
        this.setState({activeItem: name})
         
    }

    toNavigate = (location) =>{
        navigate(location)

    }
    toWeb = (web) =>{
        window.open(web, '_blank')
    }
    render() {
        return (
            <div className={indexStyles.wrapper}>
                <div className={projectStyle.container}>
                    <div className={projectStyle.name}>
                        <h1>
                            Hooper App
                        </h1>
                        <Button circular icon="github" onClick={() => this.toWeb('https://github.com/mertoz41/hooper-front-end')}/>
                        <Button circular icon="home" onClick={() => this.toNavigate('/')}/>
                        <Button circular icon="microphone" onClick={() => this.toNavigate('/beatboxbubbleapp')}/>


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
                {/* <div className={projectStyle.rest}> */}

                
                    <ProjectTabs changeView={this.changeView}/>
                    {this.state.activeItem == "description" ? 
                    <HooperSect />
                    :
                    <HooperStack />
                    }
                {/* </div> */}

                <Footer />

            </div>
        )
    }
}

export default Hooperapp
