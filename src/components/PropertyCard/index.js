import React from "react"
import { CardColumns, Card } from "react-bootstrap"
import Image from "../image"

const PropertyCard = ({
	id,
	coverImage,
	projectName,
	unitPrice,
	unitAndBuildingNo,
	bhk,
	forRent,
}) => {
	return (
		<Card>
			{coverImage != "null" ? (
				<Card.Img variant="top" src={coverImage} />
			) : (
				<Image />
			)}
			<Card.Body>
				<Card.Title>{projectName}</Card.Title>
				<Card.Text>
					{unitAndBuildingNo}, {projectName}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">
					{bhk} | {forRent} | {unitPrice}
				</small>
			</Card.Footer>
		</Card>
	)
}
export default PropertyCard
