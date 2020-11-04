import React from "react"
import Image from "../image"
import Layout from "../Layout"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Filter from "../Filter"
import PropertyCard from "../PropertyCard"
const Properties = ({ title, propertyData }) => {
  return (
    <Layout>
      <Filter />
      <Link to="/"> Go To Home </Link>
      <h1>{title}</h1>
      <Link to="/search"> All </Link>
      <Link to="/search/rent"> Rent </Link>
      <Link to="/search/buy"> Buy </Link>
      <Row>
        {propertyData.map(property => (
          <Col md={4} sm={6} xs={6}>
            <PropertyCard
              id={property.id}
              coverImage={
                property.coverImage ? property.coverImage.url : "null"
              }
              bhk={property.bhk}
              projectName={property.projectName}
              unitAndBuildingNo={property.unitAndBuildingNo}
              forRent={property.forRent}
              unitPrice={property.unitPrice}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default Properties
