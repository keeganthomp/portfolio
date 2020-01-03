import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title='About' />
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>About</h1>
    </div>
  </Layout>
)

export default About
