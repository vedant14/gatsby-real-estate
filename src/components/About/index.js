import React from "react"
import Image from "../image"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
const About = () => (
	<Container>
		<h1>Hey Vedant</h1>
		<h1>Hey people</h1>
		<p>A great template for investors.</p>
		<p>Now go build something great.</p>
		<Link to="/search"> Search for properties </Link>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
	</Container>
)

export default About
