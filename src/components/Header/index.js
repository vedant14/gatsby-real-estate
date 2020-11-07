import React from "react"
import { IMG, HeadContainer, HeadTitle } from "./Header.styles"
const Header = ({ title }) => (
	<HeadContainer>
		<HeadTitle>
			Best in Class
			<br />
			Real Estate service
		</HeadTitle>
		<IMG
			src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=50"
			alt=""
		/>
	</HeadContainer>
)

export default Header
