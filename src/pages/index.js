import React from "react"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/SEO"
import { Link } from "gatsby"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/search"> Search for properties </Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
