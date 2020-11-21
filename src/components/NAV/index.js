import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { useConfigQuery } from "../../hooks/useConfigQuery"
import { NavStyle, BrandLink, NavbarLink, DropLink } from "./NAV.styles"

const NAV = () => {
	const data = useConfigQuery()
	return (
		<NavStyle sticky="top" collapseOnSelect variant="dark" expand="lg">
			<BrandLink to="/">{data.title}</BrandLink>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Container>
					<Nav className="ml-auto">
						<NavbarLink>Call at: {data.whatsapp}</NavbarLink>
						<NavDropdown title="Search" id="collasible-nav-dropdown" bsPrefix="dropdown">
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
