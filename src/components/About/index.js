import React from "react"
import Image from "../image"
import { Row, Col, Button } from "react-bootstrap"
import { Section } from "./About.styles"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const About = () => {
	const data = useMetaDataQuery()
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
					<img
						src="https://images.unsplash.com/photo-1604969253315-a3ee31912f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
						alt="about-us"
					/>
				</Col>
			</Row>
		</Section>
	)
}
export default About
