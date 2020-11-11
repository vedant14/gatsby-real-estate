import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"
import { NavItem, NavLink } from "react-bootstrap"
export const PropertyHeader = styled.div`
	padding: 30px 20px;
	@media screen and (min-width: 768px) {
		padding: 50px 100px 50px 100px;
	}
	background-color: ${colors.blueShade1};
	color: ${colors.white};
`
export const NavButton = styled(Link)`
	background-color: ${colors.ivory};

	margin-right: 10px;

	padding: 5px 8px;
	font-size: 1.2rem;
	border-radius: 5px;
	color: ${colors.deepDarkGrey};
	:hover {
		background-color: ${colors.blueShade3};
		color: ${colors.deepDarkGrey};
	}
`
export const NavPill = styled(NavItem)`
	background-color: ${colors.ivory};
	padding: 5px 8px;
	margin-right: 10px;
	font-size: 1rem;
	border-radius: 5px;
	color: ${colors.deepDarkGrey};
	:hover {
		background-color: ${colors.blueShade3};
		color: ${colors.deepDarkGrey};
	}
`
