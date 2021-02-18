import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, StaticQuery, useStaticQuery, Link } from "gatsby"
import '../templates/styles.css'
import Layout from "../components/layout"


    // export default () => (
    //   <StaticQuery

    //     query={graphql`
    //       {
    //         allSitePage(filter: {id:{regex:"/blog/"}}) {
    //           edges {
    //             node {
    //               id
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `}
    //     render={({ allSitePage: { edges } }) => (
    //      <Layout>
    //       <ul>
    //         {edges.map(({ node: { id, path } }) => (
    //           <li key={id}>
    //             <Link to={path}>{id}</Link>
    //           </li>
    //         ))}
    //       </ul>
         
    //       </Layout>

    //     )}
    //   />
    // );

export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
              title
              description
            }
          }
          allMdx(sort: {fields: [frontmatter___title], order: DESC}) {
            nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
    }
`

const HomePage = ({ data }) => {
    return (
        <div>
         <Layout>
        <div class="wrapper">
         
          <div class="right empty">
            {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <div class="par">
                    <Link to={fields.slug}>
                        {frontmatter.title}
                    </Link>
                        <p></p>
                    </div>
                ))}
          </div>
        </div>
      </Layout>

        </div>
    )
}

export default HomePage
