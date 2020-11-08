import React from "react"
import { GlobalStyles } from "../../styles/GlobalStyles"
import Footer from "../Footer"
import NAV from "../NAV"
import ChatWidget from "../ChatWidget"
const Layout = ({ children }) => (
	<div>
		<GlobalStyles />
		<NAV />
		<main>{children}</main>
		<Footer />
		<ChatWidget />
	</div>
)

export default Layout
