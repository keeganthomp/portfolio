/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
      <div
        className='layout_container'
      >
        <Navigation />
        <main>{children}</main>
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, Keegan Thompson
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
