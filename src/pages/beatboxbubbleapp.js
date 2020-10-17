import React, { Component } from 'react'
import projectStyle from './project.module.css'
import ReactPlayer from "react-player"
import indexStyles from './index.module.css'
import { Button, Icon } from 'semantic-ui-react'
import Footer from '../components/footer'
import ProjectTabs from '../components/projecttabs'
import BeatboxerSect from '../components/beatboxersect'
import BeatboxStack from '../components/beatboxstack'
import { navigate } from 'gatsby'








export class Beatboxbubbleapp extends Component {
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
                            Beatbox Bubble App
                        </h1>
                        <Button circular icon="github" onClick={() => this.toWeb('https://github.com/mertoz41/beatbox-bubble')}/>
                        <Button circular icon="home" onClick={() => this.toNavigate('/')}/>
                        <Button circular icon="basketball ball" onClick={() => this.toNavigate('/hooperapp')}/>

                    </div>
                    {/* <div className={projectStyle.code}>
                        <Button icon>
                            <a href="https://github.com/mertoz41/hooper-front-end" target="_blank"><Icon name="github" /></a>
                        </Button>
                    </div> */}
                </div>
                <div className={projectStyle.video}>
                    <ReactPlayer className={projectStyle.player} url="https://vimeo.com/452664970" />
                </div>
                {/* <div className={projectStyle.rest}> */}

                
                    <ProjectTabs changeView={this.changeView}/>
                    {this.state.activeItem == "description" ? 
                    <BeatboxerSect />
                    :
                    <BeatboxStack />
                    }
                {/* </div> */}

                <Footer />
                

                 
            </div>
        )
    }
}

export default Beatboxbubbleapp
