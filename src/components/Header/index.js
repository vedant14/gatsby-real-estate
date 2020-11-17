import React from "react"
import { IMG, HeadContainer, HeadTitle, HeadText } from "./Header.styles"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ title }) => {
	const image = useStaticQuery(graphql`
		query HeaderImage {
			file(name: { eq: "header" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<HeadContainer>
			<HeadTitle>
				Best in Class
				<br />
				Real Estate service
			</HeadTitle>
			<HeadText> We help you find the perfect property </HeadText>
			<IMG fluid={image.file.childImageSharp.fluid} />
		</HeadContainer>
	)
}
export default Header
