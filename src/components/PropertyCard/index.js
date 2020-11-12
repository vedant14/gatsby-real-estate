import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { usePlaceHolder } from "../../hooks/usePlaceHolder"

import {
	PropCard,
	TheCard,
	RentBadge,
	SellBadge,
	PriceCard,
	CustomImg,
} from "./PropertyCard.styles"

const PropertyCard = ({
	id,
	coverImage,
	projectName,
	unitPrice,
	unitAndBuildingNo,
	bhk,
	forRent,
}) => {
	const image = usePlaceHolder()

	return (
		<TheCard key={id}>
			<Link to={`/properties/${id}`}>
				<PropCard>
					{coverImage != "null" ? (
						<PropCard.Img variant="top" src={coverImage} />
					) : (
						<CustomImg fluid={image} />
					)}
					<PropCard.Body>
						{forRent == true ? (
							<RentBadge>For Rent</RentBadge>
						) : (
							<SellBadge>For Sell</SellBadge>
						)}
						<h1>
							{unitAndBuildingNo}, {projectName}
						</h1>
						<hr />
						<p>Address of the property, city</p>
					</PropCard.Body>
					<PriceCard>
						{new Intl.NumberFormat("en-EN", {
							style: "currency",
							currency: "INR",
						}).format(unitPrice)}
					</PriceCard>
				</PropCard>
			</Link>
		</TheCard>
	)
}
export default PropertyCard
