import React from "react"
import {
	PropCard,
	TheCard,
	RentBadge,
	SellBadge,
	PriceCard,
} from "./PropertyCard.styles"
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
						{forRent == true ? (
							<RentBadge>For Rent</RentBadge>
						) : (
							<SellBadge>For Sell</SellBadge>
						)}
						<PropCard.Title>
							{unitAndBuildingNo}, {projectName}
						</PropCard.Title>
						<hr />
						<PropCard.Text>Address of the property, city</PropCard.Text>
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
