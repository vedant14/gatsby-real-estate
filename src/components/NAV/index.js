import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const NAV = () => (
	<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Container>
				<Nav className="mr-auto">
					<NavDropdown title="Search" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/search">All</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/search/rent">Rent</NavDropdown.Item>
						<NavDropdown.Item href="/search/buy">Buy</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="/Contact">Contact</Nav.Link>
					<Nav.Link href="/Contact">Whatsapp</Nav.Link>
				</Nav>
			</Container>
		</Navbar.Collapse>
	</Navbar>
)

export default NAV
