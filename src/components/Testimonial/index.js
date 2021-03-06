import React from "react"
import { useConfigQuery } from "../../hooks/useConfigQuery"

import { Card, PrimaryCard, Section } from "./Testimonial.styles"
import { Row, Col } from "react-bootstrap"
const Testimonial = () => {
	const Testimonial = useConfigQuery()

	const FirstTestimonial = Testimonial.testimonial[0]

	const SecondTestimonial =
		Testimonial.testimonial[1]

	const ThirdTestimonial = Testimonial.testimonial[2]

	return (
		<Section>
			<h1>Testimonials</h1> <hr />
			<Row>
				<Col md={4}>
					<Card id={FirstTestimonial.id}>
						<p>{FirstTestimonial.content}</p>
						<hr />
						<h2>{FirstTestimonial.name},</h2>
						<h5>{FirstTestimonial.city}</h5>
					</Card>
				</Col>
				<Col md={4}>
					<PrimaryCard id={SecondTestimonial.id}>
						<p>{SecondTestimonial.content} </p>
						<hr />
						<h2>{SecondTestimonial.name},</h2>
						<h5>{SecondTestimonial.city}</h5>
					</PrimaryCard>
				</Col>
				<Col md={4}>
					<Card id={ThirdTestimonial.id}>
						<p>{ThirdTestimonial.content}</p>
						<hr />
						<h2>{ThirdTestimonial.name},</h2>
						<h5>{ThirdTestimonial.city}</h5>
					</Card>
				</Col>
			</Row>
		</Section>
	)
}

export default Testimonial
