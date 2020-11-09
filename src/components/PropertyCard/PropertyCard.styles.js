import { Card } from "react-bootstrap"
import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const PropCard = styled(Card)`
	margin: 5px;
	color: ${colors.darkGrey};
	border-radius: 20px;
	text-align: center;

	@media screen and (min-width: 768px) {
		margin: 20px;
	}
	:hover {
		color: ${colors.deepDarkGrey};
		transition: all 0.5s;
		transform: translateY(-10px);
	}

	img {
		height: 150px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
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
export const RentBadge = styled.span`
	background-color: ${colors.blueShade1};
	z-index: 999;
	width: fit-content;
	display: flex;
	padding: 5px;
	margin-left: -10px;
	margin-bottom: 10px;
	color: white;
	border-radius: 5px;
`
export const SellBadge = styled.span`
	background-color: ${colors.deepDarkGrey};
	z-index: 999;
	width: fit-content;
	display: flex;
	padding: 5px;
	margin-left: -10px;
	margin-bottom: 10px;
	color: white;
	border-radius: 5px;
`

export const PriceCard = styled.div`
	background-color: ${colors.darkGrey};
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
	color: ${colors.white};
	font-size: 1.2rem;
	padding: 10px;
`
