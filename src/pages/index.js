import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm Developing this site with Gatsby from onset Bruhda!</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/cent-smiles.png"/>
      </Layout>
  )
}

export default IndexPage