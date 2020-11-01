import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import Rent from "../components/Rent"
const SearchPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Link to="/"> Go To Home </Link>
			<h1>Searching</h1>
			<Rent />
		</Layout>
	)
}

export default SearchPage
