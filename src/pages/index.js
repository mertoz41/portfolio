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
import { Helmet } from "react-helmet"




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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mert Ozkaynak</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
  
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
