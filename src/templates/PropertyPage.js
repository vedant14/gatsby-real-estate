import React from "react"
import { graphql } from "gatsby"

const PropertyPage = ({
	data: {
		gcms: { property },
	},
}) => (
	<React.Fragment>
		<h1>{property.projectName}</h1>
		<p>
			{property.unitPrice}
			{new Intl.NumberFormat("en-EN", {
				style: "currency",
				currency: "INR",
			}).format(property.unitPrice)}
		</p>
	</React.Fragment>
)
export const PageQuery = graphql`
	query PropertyPageQuery($id: ID!) {
		gcms {
			property(where: { id: $id }) {
				projectName
				unitPrice
			}
		}
	}
`

export default PropertyPage
