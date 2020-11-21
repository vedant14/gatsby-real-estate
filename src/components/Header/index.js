import React from "react"
import { IMG, HeadContainer, HeadTitle, HeadText } from "./Header.styles"
import { useStaticQuery, graphql } from "gatsby"
import { useConfigQuery } from "../../hooks/useConfigQuery"

const Header = ({ title }) => {
	const data = useConfigQuery()
	const image = useStaticQuery(graphql`
		query HeaderImage {
			file(name: { eq: "header" }) {
				childImageSharp {
					fluid(maxWidth: 1800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<HeadContainer>
			<HeadTitle>
					{data.header}
			</HeadTitle>
			<HeadText> {data.subtitle} </HeadText>
			<IMG fluid={image.file.childImageSharp.fluid} />
		</HeadContainer>
	)
}
export default Header
