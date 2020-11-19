import { Card } from "react-bootstrap"
import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const PropCard = styled(Card)`
	color: ${colors.darkGrey};
	margin-bottom: 10px;
	border-radius: 20px;
	text-align: center;
	height: 300px;
	z-index: 1;
	border: none;
	background-color: ${colors.deepDarkGrey};

	@media screen and (min-width: 768px) {
		margin: 50px 20px;
		height: 400px;
	}
	:hover {
		color: ${colors.deepDarkGrey};
		transition: all 0.5s;
		transform: translateY(-10px);
	}

	img {
		position: absolute;
		z-index: 2;
		height: 100%;
		border-radius: 20px;
		object-fit: cover;
		@media screen and (min-width: 768px) {
			height: 100% !important;
		}
	}
`

export const Title = styled.h5`
	text-align: left;
	padding: 20px 30px 90px 20px;
	text-shadow: 0 0 1rem rgba(0, 0, 0, 0.34);

	border-radius: 20px;
	color: ${colors.white};
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.34) 0%,
		rgba(196, 196, 196, 0) 80%
	);
	z-index: 3;
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
`

export const Address = styled.p`
	font-size: 0.8rem;
	margin: -95px 20px;
	display: none;
	text-shadow: 0 0 1rem rgba(0, 0, 0, 0.34);
	text-align: left;
	border-radius: 20px;
	color: ${colors.white};
	z-index: 3;
	@media screen and (min-width: 768px) {
		display: flex;
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
	position: absolute;
	margin-left: -10px;
	bottom: 40px;
	color: white;
	font-size: 0.8rem;
	border-radius: 5px;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
		bottom: 40px;
	}
`
export const RentBadge = styled(ForBadge)`
	background-color: ${colors.blueShade1};
	bottom: 60px;
	@media screen and (min-width: 768px) {
		bottom: 40px;
	}
`
export const SellBadge = styled(ForBadge)`
	background-color: ${colors.deepDarkGrey};
`

export const PriceCard = styled.span`
	position: absolute;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	width: 100%;
	bottom: 0px;
	padding: 10px 20px;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.24) 0%,
		rgba(196, 196, 196, 0) 100%
	);
	z-index: 3;
	text-align: right;
	text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.9);
	color: ${colors.white};
	font-size: 0.8rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
`
