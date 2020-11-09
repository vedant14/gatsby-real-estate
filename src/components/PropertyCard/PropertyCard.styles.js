import { Card } from "react-bootstrap"
import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const PropCard = styled(Card)`
	height: 400px;
	margin: 5px;
	title: 1rem;
	color: ${colors.darkGrey};
	border-radius: 20px;
	text-align: center;

	@media screen and (min-width: 768px) {
		height: 450px;
		margin: 20px;
	}
	:hover {
		color: ${colors.deepDarkGrey};
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
export const Badge = styled.span`
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
