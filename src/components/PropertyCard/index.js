import React from "react"
import { Link } from "gatsby"
import { usePlaceHolder } from "../../hooks/usePlaceHolder"

import {
	PropCard,
	TheCard,
	RentBadge,
	SellBadge,
	PriceCard,
	Address,
	Title,
} from "./PropertyCard.styles"

const PropertyCard = ({
	id,
	coverImage,
	projectName,
	unitPrice,
	unitAndBuildingNo,
	bhk,
	address,
	forRent,
}) => {
	const image = usePlaceHolder()

	return (
		<TheCard key={id}>
			<Link to={`/properties/${id}`}>
				<PropCard>
					{coverImage !== "null" ? (
						<PropCard.Img variant="top" src={coverImage} loading="lazy" />
					) : (
						<PropCard.Img variant="top" src={image.publicURL} loading="lazy" />
					)}
					<Title>
						{bhk} BHK, {projectName}
					</Title>
					<Address>
						{unitAndBuildingNo}, {address}
					</Address>
					{forRent === true ? (
						<RentBadge>For Rent</RentBadge>
					) : (
						<SellBadge>For Sell</SellBadge>
					)}
					<PriceCard>
						₹ {unitPrice} {forRent === true ? <span>/ per month</span> : " "}
					</PriceCard>
				</PropCard>
			</Link>
		</TheCard>
	)
}
export default PropertyCard
