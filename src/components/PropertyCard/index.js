import React from "react"
import { PropCard, TheCard, Badge } from "./PropertyCard.styles"
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
		<TheCard>
			<Link to={`/properties/${id}`}>
				<PropCard>
					{coverImage != "null" ? (
						<PropCard.Img variant="top" src={coverImage} />
					) : (
						<Image />
					)}
					<PropCard.Body>
						<Badge>{forRent == true ? "For Rent" : "For Sell"}</Badge>
						<PropCard.Title>{projectName}</PropCard.Title>
						<PropCard.Text>
							{unitAndBuildingNo}, {projectName}
						</PropCard.Text>
					</PropCard.Body>
					<PropCard.Footer>
						<small className="text-muted">
							{forRent} | {unitPrice}
						</small>
					</PropCard.Footer>
				</PropCard>
			</Link>
		</TheCard>
	)
}
export default PropertyCard
