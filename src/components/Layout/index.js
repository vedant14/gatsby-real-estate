import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from "../../styles/GlobalStyles"
import Footer from "../Footer"
import NAV from "../NAV"
const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NAV />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
