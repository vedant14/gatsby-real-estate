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
						<img
							src="https://images.unsplash.com/photo-1604969253315-a3ee31912f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
							alt=""
						/>
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
