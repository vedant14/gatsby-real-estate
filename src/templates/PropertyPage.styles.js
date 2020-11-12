import styled from "styled-components"
import { Container } from "react-bootstrap"
import { colors } from "../styles/GlobalStyles"
import Img from "gatsby-image"

export const CustomImg = styled(Img)`
	width: 100%;
	height: 60vh;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	object-fit: cover;
	border-radius: 10px;
`
export const Section = styled(Container)`
	padding-bottom: 50px;
	padding-top: 50px;
	min-height: 80vh;
	h1 {
		margin: 30px 0px;
	}
	img {
		width: 100%;
		height: 60vh;
		margin-right: auto;
		margin-left: auto;
		display: flex;
		object-fit: cover;
		border-radius: 10px;
	}
`
export const ForBadge = styled.span`
	width: fit-content;
	padding: 5px;
	color: white;
	border-radius: 5px;
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
	}
`
export const RentBadge = styled(ForBadge)`
	background-color: ${colors.blueShade1};
`
export const SellBadge = styled.span`
	background-color: ${colors.deepDarkGrey};
	z-index: 999;
	width: fit-content;
	padding: 5px;
	color: white;
	border-radius: 5px;
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
	}
`
