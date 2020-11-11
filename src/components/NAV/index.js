import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"
import { NavStyle } from "./NAV.styles"

const NAV = () => {
	const data = useMetaDataQuery()
	return (
		<NavStyle sticky="top" collapseOnSelect variant="dark" expand="lg">
			<Navbar.Brand href="/">{data.title}</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Container>
					<Nav className="ml-auto">
						<NavDropdown
							title="Search"
							drop="left"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item href="/search">All</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/search/rent">Rent</NavDropdown.Item>
							<NavDropdown.Item href="/search/buy">Buy</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#Contact">Contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar.Collapse>
		</NavStyle>
	)
}
export default NAV
