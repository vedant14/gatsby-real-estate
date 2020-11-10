import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { Section, SearchButton } from "./ContactUs.styles"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const ContactUs = () => {
	const data = useMetaDataQuery()
	return (
		<Section>
			<Row>
				<Col md={6}>
					<h1>Contact Us</h1>
					<hr />
					<h2> {data.title} </h2>
					<p>
						Plot 11, Some Street
						<br /> One address, opp.
						<br /> some sq. Pune, 440014
					</p>
					<p> Email at: {data.email} </p>
					<SearchButton
						href={`https://wa.me/${data.whatsapp}?text=I%20saw%20your%20website%20and%20I%20am%20interested%20in%20your%20services.`}
						target="_blank"
						variant="success"
					>
						Chat on WhatsApp
					</SearchButton>
				</Col>
				<Col md={6}>
					<div>
						<div>
							<iframe
								src={`https://maps.google.com/maps?q=${data.map}&output=embed`}
								frameBorder={0}
							/>
						</div>
					</div>
				</Col>
			</Row>
		</Section>
	)
}

export default ContactUs
