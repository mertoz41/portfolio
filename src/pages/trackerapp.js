import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'
import Footer from '../components/footer'
import ProjectTabs from '../components/projecttabs'
import TrackerSect from '../components/trackersect'
import TrackerStack from '../components/trackerstack'
import { navigate } from 'gatsby'








export class Trackerapp extends Component {
    state = {
        activeItem: "description"
    }

    changeView = (name) => {
        this.setState({activeItem: name})
         
    }
    toNavigate = (name) =>{
        navigate(name)

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
                            Project Tracker App
                        </h1>
                        <Button circular icon="github" onClick={() => this.toWeb('https://github.com/mertoz41/tracker-frontend')}/>
                        <Button circular icon="home" onClick={() => this.toNavigate('/')}/>
                        <Button circular icon="basketball ball" onClick={() => this.toNavigate('/hooperapp')}/>
                        <Button circular icon="microphone" onClick={() => this.toNavigate('/beatboxbubbleapp')}/>

                    </div>
                </div>
                <div className={projectStyle.video}>
                    <ReactPlayer className={projectStyle.player} url="https://vimeo.com/483887327" />
                </div>

                
                    <ProjectTabs changeView={this.changeView}/>
                    {this.state.activeItem == "description" ? 
                    <TrackerSect />
                    :
                    <TrackerStack />
                    }
                {/* </div> */}

                <Footer />
                

                 
            </div>
        )
    }
}

export default Trackerapp
