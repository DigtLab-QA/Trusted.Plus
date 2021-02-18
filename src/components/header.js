import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#85929E`,
      margin: '0 0px 0',
      position: 'fixed',
         top:'0',
        height:'70px',
        zIndex: '100',
        width: '100%'
        // display: 'inlineBlock'
    }}
  >
    <div
      style={{
        margin: `0 100`,
        maxWidth: '100%',
        padding: `0.55rem 1.0875rem`,
        textAlign: 'center',
        

      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
