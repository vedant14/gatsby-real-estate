import React from "react"
import Image from "../image"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
const About = () => (
	<Container>
		<h1>About Us</h1>
		<Row>
			<Col>
				<p>A great template for investors.</p>
				<p>
					Now go build something great. Real estate is easy to get lost into.
				</p>
				<p>We at this company try to provide the best info to you.</p>
				<Link to="/search">
					{" "}
					<Button>Search for properties</Button>{" "}
				</Link>
			</Col>
			<Col>
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					<Image />
				</div>
			</Col>
		</Row>
	</Container>
)

export default About
