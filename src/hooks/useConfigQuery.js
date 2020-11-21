import { useStaticQuery, graphql } from "gatsby"

export const useConfigQuery = () => {
	const data = useStaticQuery(graphql`
		query ConfigQuery{
			markdownRemark(frontmatter: { type: { eq: "config" } }) {
				frontmatter {
					whatsapp
					email
					map
					title
					header
					subtitle
					description
					author
					about {
        				line
      				}
					testimonial {
						id
						name
						content
						city
					}
				}
			}
		}
	`)
	return data.markdownRemark.frontmatter
}
