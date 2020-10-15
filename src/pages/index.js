import React, { Component } from "react"
import { Link } from "gatsby"
import indexStyles from './index.module.css'
import Card from '../components/card'
import 'semantic-ui-css/semantic.min.css'
import Tabs from '../components/tabs'
import AboutSect from '../components/aboutsect'
import ProjectSect from '../components/projectsect'
import ContactSect from '../components/contactsect'



class IndexPage extends Component{
  state = {
    showing: "about"
  }

  changeView = (name) => {
    this.setState({showing: name})
     
  }
  render(){
    return(
      <div className={indexStyles.wrapper}>
          <Card />
          <Tabs changeView={this.changeView} />
          {this.state.showing == "about" ?
          <AboutSect />
          :
          null
          }
          {this.state.showing == "projects" ?
          <ProjectSect />
          : 
          null
          }
          {this.state.showing == "contact" ?
          <ContactSect />
          :
          null
          }
          {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      </div>

    )
  }
}


export default IndexPage
