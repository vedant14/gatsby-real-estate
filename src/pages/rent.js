import React from "react"
import { graphql } from "gatsby"
import Properties from "../components/Properties"
const RentPage = ({ data }) => {
	const properties = data.gcms.properties
	return <Properties title="Rent" propertyData={properties} />
}

export default RentPage

export const query = graphql`
	{
		gcms {
			properties(orderBy: updatedAt_ASC, where: { forRent: true }) {
				id
				unitAndBuildingNo
				unitPrice
				projectName
				bhk
				forRent
				coverImage {
					id
					url
				}
				images {
					id
					url
				}
			}
		}
	}
`
