import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
            <h1>{ data.site.siteMetadata.title}</h1>
        </header>
    )
}
export default Header