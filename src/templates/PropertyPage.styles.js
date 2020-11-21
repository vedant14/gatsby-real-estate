import styled from "styled-components"
import { Container, Table } from "react-bootstrap"
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
	border: 0.5px solid ${colors.deepDarkGrey};
`
export const Section = styled(Container)`
	padding-bottom: 50px;
	padding-top: 50px;
	min-height: 80vh;
	h1 {
		margin: 30px 0px;
	}
	p {
		margin: 20px;
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

export const PriceRow = styled.div`
	margin: 0px;
	@media screen and (min-width: 768px) {
		float: right;
		margin-top: 40px;
	}
`
export const ForBadge = styled.span`
	width: fit-content;
	position: inherit;
	padding: 10px;
	color: white;
	border-radius: 5px;
	font-size: 1rem;
	@media screen and (min-width: 768px) {
	}
`
export const RentBadge = styled(ForBadge)`
	background-color: ${colors.secondaryAccent};
`
export const SellBadge = styled(ForBadge)`
	background-color: ${colors.greenShade2};
`
export const PriceLabel = styled.span`
	margin: 30px;
	font-size: 1.3rem;
	font-style: italic;
`

export const PropertyDetails = styled(Table)`
	margin-top: 30px;
	th {
	}
	td {
		text-align: right;
	}
	@media screen and (min-width: 768px) {
	}
`
