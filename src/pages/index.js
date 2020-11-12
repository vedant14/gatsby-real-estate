import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import About from "../components/About"
import Featured from "../components/Featured"
import ContactUs from "../components/ContactUs"
const IndexPage = () => {
	return (
		<Layout>
			<Header />
			<About />
			<Featured />
			<ContactUs />
		</Layout>
	)
}

export default IndexPage
