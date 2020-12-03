import React, { Component } from "react"
import { Link } from "gatsby"
import indexStyles from './index.module.css'
import Card from '../components/card'
import 'semantic-ui-css/semantic.min.css'
import Tabs from '../components/tabs'
import AboutSect from '../components/aboutsect'
import ProjectSect from '../components/projectsect'
import Stacksect from '../components/stacksect'
import Footer from '../components/footer'



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
  
          <Card changeView={this.changeView}/>
          {/* <Tabs changeView={this.changeView} /> */}
          <div className={indexStyles.content}>

          
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
          {this.state.showing == "stack" ?
          <Stacksect />
          :
          null
          }
          </div>
          {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
          <Footer />
      </div>

    )
  }
}


export default IndexPage
