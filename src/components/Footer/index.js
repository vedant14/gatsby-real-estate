import React from "react"
import { FooterCard } from "./Footer.styles"
import { Container, Row, Col } from "react-bootstrap"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const Footer = () => {
	const data = useMetaDataQuery()
	return (
		<FooterCard>
			<Container>
				<Row>
					<Col md={6}>
						<p>Copyright © 2020 {data.title} - All Rights Reserved.</p>
					</Col>
					<Col md={6}>
						<p>Social</p>
					</Col>
				</Row>
			</Container>
		</FooterCard>
	)
}
export default Footer
