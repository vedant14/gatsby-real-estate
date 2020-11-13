import { Card } from "react-bootstrap"
import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import Img from "gatsby-image"

export const CustomImg = styled(Img)`
	height: 100px;
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
	object-fit: cover;
	@media screen and (min-width: 768px) {
		height: 200px !important;
	}
`
export const PropCard = styled(Card)`
	color: ${colors.darkGrey};
	margin-bottom: 10px;
	border-radius: 5px;
	border: 0.1px solid ${colors.deepDarkGrey};
	text-align: center;
	height: 350px;

	@media screen and (min-width: 768px) {
		margin: 20px;
		height: 450px;
	}
	:hover {
		color: ${colors.deepDarkGrey};
		transition: all 0.5s;
		transform: translateY(-10px);
	}
	h1 {
		font-size: 1rem;
		@media screen and (min-width: 768px) {
			font-size: 1.2rem;
		}
	}
	p {
		font-size: 0.9rem;
		@media screen and (min-width: 768px) {
			font-size: 0.9rem;
		}
	}

	img {
		height: 100px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		object-fit: cover;
		@media screen and (min-width: 768px) {
			height: 200px !important;
		}
	}
`
export const TheCard = styled.span`
	a:hover {
		text-decoration: none;
	}
`

export const ForBadge = styled.span`
	z-index: 999;
	width: fit-content;
	display: flex;
	padding: 5px;
	margin-left: -10px;
	margin-bottom: 10px;
	color: white;
	border-radius: 5px;
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
	}
`
export const RentBadge = styled(ForBadge)`
	background-color: ${colors.blueShade1};
`
export const SellBadge = styled(ForBadge)`
	background-color: ${colors.deepDarkGrey};
`

export const PriceCard = styled.div`
	background-color: ${colors.darkGrey};
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	color: ${colors.white};
	font-size: 1.1rem;
	padding: 10px;
`
