import styled from "styled-components"
import { Navbar } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"
import { Link } from "gatsby"
export const NavStyle = styled(Navbar)`
	background-color: ${colors.primaryAccent};
`

export const LinkConst = styled(Link)`
	display: block;
	color: ${colors.white};
	:hover {
		color: ${colors.white};
		opacity: 80%;
	}
`

export const NavbarLink = styled(LinkConst)`
	padding: 0.5rem 0rem;
	left: 0;
	@media screen and (min-width: 768px) {
		padding: 0.5rem 1rem;
	}
`

export const DropLink = styled(LinkConst)`
	width: 100%;
	padding: 0.25rem 1.5rem;
	clear: both;
	font-weight: 400;
	color: ${colors.deepDarkGrey};
	text-align: inherit;
	white-space: nowrap;
	background-color: transparent;
	border: 0;
	:hover {
		color: ${colors.deepDarkGrey};
	}
`

export const BrandLink = styled(Link)`
	color: ${colors.white};
	font-size: 1.4rem;
	padding: 10px;
	:hover {
		color: ${colors.white};
		opacity: 80%;
	}
`
