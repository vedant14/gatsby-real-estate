import React from "react"
import { graphql } from "gatsby"
import Properties from "../components/Properties"
const SearchPage = ({ data }) => {
	const properties = data.gcms.properties
	return <Properties title="Showing all properties" propertyData={properties} />
}

export default SearchPage

export const query = graphql`
	{
		gcms {
			properties(orderBy: updatedAt_ASC) {
				id
				unitAndBuildingNo
				unitPrice
				projectName
				bhk
				forRent
				address
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
