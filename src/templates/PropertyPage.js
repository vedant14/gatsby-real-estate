import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
	Section,
	RentBadge,
	SellBadge,
	CustomImg,
	PriceRow,
	PriceLabel,
	PropertyDetails,
} from "./PropertyPage.styles"
import { Row, Col, thead, tr, th, tbody, td } from "react-bootstrap"
import ChatBox from "../components/ChatBox"
import { usePlaceHolder } from "../hooks/usePlaceHolder"

const PropertyPage = ({
	data: {
		gcms: { property },
	},
}) => {
	const image = usePlaceHolder()
	return (
		<Layout>
			<Section>
				{property.coverImage ? (
					<img src={property.coverImage.url} alt="" />
				) : (
					<CustomImg fluid={image} />
				)}
				<Row>
					<Col md={6}>
						<h1>
							{property.unitAndBuildingNo} {property.projectName}
						</h1>
					</Col>
					<Col md={6}>
						<PriceRow>
							{property.forRent == true ? (
								<RentBadge>For Rent</RentBadge>
							) : (
								<SellBadge>For Sell</SellBadge>
							)}
							<PriceLabel>
								{new Intl.NumberFormat("en-EN", {
									style: "currency",
									currency: "INR",
								}).format(property.unitPrice)}
							</PriceLabel>
						</PriceRow>
					</Col>
				</Row>
				<Row>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
				</Row>
				<hr />
				<Row>
					<Col md={8}>
						<h2>Property Details</h2>
						<Row>
							<Col md={6}>
								<PropertyDetails responsive>
									<tbody>
										<tr>
											<th>Property Type:</th>
											<td> Apartment</td>
										</tr>
										<tr>
											<th>Bedrooms:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Bathrooms:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Balconies:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Property Furnishings:</th>
											<td> Fully-Furnished</td>
										</tr>
									</tbody>
								</PropertyDetails>
							</Col>
							<Col md={6}>
								<PropertyDetails responsive>
									<tbody>
										<tr>
											<th>Property Type:</th>
											<td> Apartment</td>
										</tr>
										<tr>
											<th>Bedrooms:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Bathrooms:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Balconies:</th>
											<td> 3</td>
										</tr>
										<tr>
											<th>Property Furnishings:</th>
											<td> Fully-Furnished</td>
										</tr>
									</tbody>
								</PropertyDetails>
							</Col>
						</Row>
					</Col>
					<Col md={3}>
						<ChatBox />
					</Col>
				</Row>
			</Section>
		</Layout>
	)
}
export const PageQuery = graphql`
	query PropertyPageQuery($id: ID!) {
		gcms {
			property(where: { id: $id }) {
				coverImage {
					url
				}
				forRent
				id
				images {
					url
				}
				projectName
				unitAndBuildingNo
				unitPrice
				featured
				bhk
			}
		}
	}
`

export default PropertyPage
