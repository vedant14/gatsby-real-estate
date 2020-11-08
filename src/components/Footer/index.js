import React from "react"
import { FooterCard } from "./Footer.styles"
import { Container, Row, Col } from "react-bootstrap"
const Footer = () => (
	<FooterCard>
		<Container>
			<Row>
				<Col md={6}>
					<h1>HI</h1>
				</Col>
				<Col md={6}>Social</Col>
			</Row>
		</Container>
	</FooterCard>
)

export default Footer
