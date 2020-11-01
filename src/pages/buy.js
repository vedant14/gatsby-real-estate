import React from "react"
import { graphql } from "gatsby"
import Properties from "../components/Properties"
const BuyPage = ({ data }) => {
	const properties = data.gcms.properties
	return <Properties title="Buy" propertyData={properties} />
}

export default BuyPage

export const query = graphql`
	{
		gcms {
			properties(orderBy: updatedAt_ASC, where: { forRent: false }) {
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
