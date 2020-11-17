import React from "react"
import { Row, Col } from "react-bootstrap"
import { Section } from "./About.styles"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const About = () => {
	const data = useMetaDataQuery()
	const image = useStaticQuery(graphql`
		query AboutImage {
			file(name: { eq: "about" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Section>
			<Row>
				<Col>
					<h1>About Us </h1>
					<h2> {data.title}</h2>
					<hr />
					<p>A great template for investors.</p>
					<p>
						Now go build something great. Real estate is easy to get lost into.
					</p>
					<p>We at this company try to provide the best info to you.</p>
				</Col>
				<Col>
					<Img fluid={image.file.childImageSharp.fluid} />
				</Col>
			</Row>
		</Section>
	)
}
export default About
