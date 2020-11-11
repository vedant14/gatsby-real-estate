import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"
import { Container, NavItem, NavLink, Row } from "react-bootstrap"
export const PropertyHeader = styled.div`
	padding: 30px 20px 0px 20px;
	h1 {
		font-size: 1.5rem;
	}
	@media screen and (min-width: 768px) {
		padding: 50px 100px 20px 100px;
		h1 {
			font-size: 2.5rem;
		}
	}
	background-color: ${colors.blueShade1};
	color: ${colors.white};
`
export const NavButton = styled(Link)`
	background-color: ${colors.ivory};
	margin-right: 10px;
	padding: 5px 8px;
	@media screen and (min-width: 768px) {
		font-size: 1.1rem;
	}
	font-size: 0.8rem;
	border-radius: 5px;
	color: ${colors.deepDarkGrey};
	:hover {
		background-color: ${colors.blueShade3};
		color: ${colors.deepDarkGrey};
	}
`
export const FilterRow = styled(Row)`
	padding: 10px 35px;
	margin-right: 0px;
	@media screen and (min-width: 768px) {
		padding: 0px 150px 50px 115px;
	}
	background-color: ${colors.blueShade1};
	color: ${colors.white};
`
export const NavPill = styled(NavItem)`
	background-color: ${colors.ivory};
	margin-right: 10px;
	margin-bottom: 10px;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
	font-size: 0.8rem;
	border-radius: 5px;
	a {
		color: ${colors.deepDarkGrey};
	}
	:hover {
		background-color: ${colors.blueShade3};
		color: ${colors.deepDarkGrey};
	}
`

export const Section = styled(Container)`
	padding-bottom: 50px;
	padding-top: 50px;
	min-height: 100vh;
	::after {
		content: "Can't find what you were looking for? WhatsApp us using the chat box on your screen 👉👇";
		background-color: ${colors.ivory};
		color: ${colors.blueShade1};
		padding: 10px;
		@media screen and (min-width: 768px) {
			font-size: 1.4rem;
			width: 50%;
			margin-right: auto;
			margin-left: auto;
			padding: 50px;
		}

		font-size: 1.1rem;
		margin-top: 10px;
		display: block;
		border-radius: 10px;
	}
`
