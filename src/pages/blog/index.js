import React from "react";
import Layout from "../../components/layout";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from "gatsby";
import { siteTitle } from '../../components/site-title.module.css'


const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
           {
               data.allMdx.nodes.map(node => (
                   <article key={node.id}>
                       <h2>{node.frontmatter.title}</h2>
                       <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                       <p className={siteTitle}>Posted: {node.frontmatter.date}</p>
                   </article>
               ))
           }
        </Layout>
    )
}

    export const query = graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
                }
            }
        }
    `

export default BlogPage