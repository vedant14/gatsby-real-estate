import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import About from "../components/About"
import Featured from "../components/Featured"
import Testimonial from "../components/Testimonial"
import ContactUs from "../components/ContactUs"
const IndexPage = () => {
	return (
		<Layout>
			<Header />
			<About />
			<Featured />
			<Testimonial />
			<ContactUs />
		</Layout>
	)
}

export default IndexPage
