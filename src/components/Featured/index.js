import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { Section, SearchButton, BGColor } from "./Featured.styles"
import PropertyCard from "../PropertyCard"

export default function Featured() {
	const data = useStaticQuery(graphql`
		{
			gcms {
				properties(
					first: 10
					where: { featured: true }
					orderBy: updatedAt_DESC
				) {
					id
					coverImage {
						id
						url
					}
					projectName
					unitAndBuildingNo
					unitPrice
					forRent
					bhk
				}
			}
		}
	`)

	return (
		<BGColor>
			<Section>
				<h1>Featured Properties</h1> <Link to="/search"> See All </Link>
				<hr />
				<Row>
					{data.gcms.properties.map(property => (
						<Col md={4} sm={6} xs={6}>
							<PropertyCard
								id={property.id}
								coverImage={
									property.coverImage ? property.coverImage.url : "null"
								}
								bhk={property.bhk}
								projectName={property.projectName}
								unitAndBuildingNo={property.unitAndBuildingNo}
								forRent={property.forRent}
								unitPrice={property.unitPrice}
							/>
						</Col>
					))}
				</Row>
				<Link to="/search">
					<SearchButton id="Contact">Search all properties</SearchButton>
				</Link>
			</Section>
		</BGColor>
	)
}
