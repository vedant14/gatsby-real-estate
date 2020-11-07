import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import About from "../components/About"
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <SEO />
      <About />
    </Layout>
  )
}

export default IndexPage
