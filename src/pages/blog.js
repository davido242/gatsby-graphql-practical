import React from "react";
import Layout from "../components/layout";
import MyComponent from "../components/component";
import Header from "../components/header";
import { graphql } from "gatsby";


const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
           <ul>
               {data.allFile.nodes.map(node => (
                   <li key={node.name}> {node.name} </li>
               ))}
           </ul>
            <MyComponent />
            <Header />
        </Layout>
    )
}

    export const query = graphql `
        query PostQuery {
            allFile {
            nodes {
                name
                }
             }
          }
        `

export default BlogPage