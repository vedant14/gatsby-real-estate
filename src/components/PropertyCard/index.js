import React from "react"
import { PropCard } from "./PropertyCard.styles"
import Image from "../image"
import { Link } from "gatsby"
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
		<PropCard>
			{coverImage != "null" ? (
				<PropCard.Img variant="top" src={coverImage} />
			) : (
				<Image />
			)}
			<PropCard.Body>
				<PropCard.Title>{projectName}</PropCard.Title>
				<PropCard.Text>
					{unitAndBuildingNo}, {projectName}
				</PropCard.Text>
			</PropCard.Body>
			<PropCard.Footer>
				<small className="text-muted">
					{bhk} | {forRent} | {unitPrice}
				</small>
				<Link to={`/properties/${id}`}> View </Link>
			</PropCard.Footer>
		</PropCard>
	)
}
export default PropertyCard
