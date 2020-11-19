import { useStaticQuery, graphql } from "gatsby"

export const usePlaceHolder = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
				publicURL
			}
		}
	`)
	return data.placeholderImage
}
