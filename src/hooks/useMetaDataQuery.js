import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
	const data = useStaticQuery(graphql`
		query MetaDataQuery {
			site {
				siteMetadata {
					author
					title
					whatsapp
					description
					email
					map
				}
			}
		}
	`)
	return data.site.siteMetadata
}
