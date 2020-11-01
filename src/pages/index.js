import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    gcms: { properties },
  } = useStaticQuery(pageQuery)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hey people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        {properties.map(({ id, ...property }) => (
          <div key={id}>
            <h1> {property.projectName} </h1>
            <div>
              {property.coverImage ? (
                <img src={property.coverImage.url} alt="Cover Image" />
              ) : (
                <Image />
              )}
            </div>
            <p>
              {property.images.map(({ ...image }) => (
                <div key={image.id}>
                  <img src={image.url} alt="" />
                </div>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

const pageQuery = graphql`
  {
    gcms {
      properties {
        id
        projectName
        coverImage {
          id
          url
        }
        images {
          id
          url
        }
      }
    }
  }
`

export default IndexPage
