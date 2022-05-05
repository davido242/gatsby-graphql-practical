import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle 
} from './layout.module.css'


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
            <h1 className={siteTitle}>{ data.site.siteMetadata.title}</h1>
        </header>
    )
}
export default Header