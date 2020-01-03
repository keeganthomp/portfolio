import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../components/Logo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Logo />

    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <p>California based web devloper.</p>
    </div>
  </Layout>
)

export default IndexPage
