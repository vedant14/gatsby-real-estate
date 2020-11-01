import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"
import Properties from "../components/Properties"
const RentPage = ({ data }) => {
	const properties = data.gcms.properties
	return (
		<Layout>
			<SEO title="Home" />
			<Link to="/"> Go To Home </Link>
			<h1>Searching</h1>
			<Properties propertyData={properties} />
		</Layout>
	)
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
