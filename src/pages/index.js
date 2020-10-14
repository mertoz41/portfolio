import React from "react"
import { Link } from "gatsby"
import indexStyles from './index.module.css'
import Card from '../components/card'
import 'semantic-ui-css/semantic.min.css'
import Tabs from '../components/tabs'




const IndexPage = () => (
  <div className={indexStyles.wrapper}>
    <Card />
    <Tabs />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </div>
  
)

export default IndexPage
