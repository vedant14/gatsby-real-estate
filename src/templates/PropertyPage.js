import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Section, RentBadge, SellBadge, CustomImg } from "./PropertyPage.styles"
import { Row, Col } from "react-bootstrap"
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
					<Col>
						<h1>
							{property.unitAndBuildingNo} {property.projectName}
						</h1>
					</Col>
					<Col>
						{property.forRent == true ? (
							<RentBadge>For Rent</RentBadge>
						) : (
							<SellBadge>For Sell</SellBadge>
						)}
						{new Intl.NumberFormat("en-EN", {
							style: "currency",
							currency: "INR",
						}).format(property.unitPrice)}
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
