import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
    siteTitle 
} from './site-title.module.css'


const Header = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        siteBuildMetadata {
            buildTime
          }
      }
    `)
    return (
        <header>
            <h1 className={siteTitle}>{"Build Time: " + data.siteBuildMetadata.buildTime}</h1>
        </header>
    )
}
export default Header