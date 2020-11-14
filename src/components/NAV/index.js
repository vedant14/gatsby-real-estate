import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"
import { NavStyle, BrandLink, NavbarLink, DropLink } from "./NAV.styles"

const NAV = () => {
	const data = useMetaDataQuery()
	return (
		<NavStyle sticky="top" collapseOnSelect variant="dark" expand="lg">
			<BrandLink to="/">{data.title}</BrandLink>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Container>
					<Nav className="ml-auto">
						<NavDropdown
							title="Search"
							drop="left"
							id="collasible-nav-dropdown"
						>
							<DropLink to="/search">All Properties</DropLink>
							<NavDropdown.Divider />
							<DropLink to="/search/rent">Rent</DropLink>
							<DropLink to="/search/buy">Buy</DropLink>
						</NavDropdown>
						<NavbarLink to="/#Contact"> Contact </NavbarLink>
					</Nav>
				</Container>
			</Navbar.Collapse>
		</NavStyle>
	)
}
export default NAV
