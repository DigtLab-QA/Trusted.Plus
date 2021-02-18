/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 0 0`,
            padding: '70px 0px 45px 0px ',
          }}
        >
          {children}
          
        </div>
          <footer style={{
      background: `#CCD1D1`,
      padding: '10px 0px 10px',
      color:'white',
      textAlign:'center',
      position: 'fixed',
      bottom:'0',
      overflow:'hidden',
      display: 'inline',
      width: '100%',
      height: '45px'
    }}>
            ©  DIGT.RU, {new Date().getFullYear()}
          </footer>
      </>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
