import React from "react"
import { Row, Col } from "react-bootstrap"
import { Section } from "./About.styles"
import { useConfigQuery } from "../../hooks/useConfigQuery"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const About = () => {
	const data = useConfigQuery()
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
					<div>
						{data.about.map(item =>(
							<p>{item.line}</p>
							))}
					</div>
				</Col>
				<Col>
					<Img fluid={image.file.childImageSharp.fluid} />
				</Col>
			</Row>
		</Section>
	)
}
export default About
