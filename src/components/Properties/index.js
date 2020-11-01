import React from "react"
import Image from "../image"
import Layout from "../Layout"
import { CardColumns, Card } from "react-bootstrap"
import { Link } from "gatsby"
const Properties = ({ title, propertyData }) => {
  return (
    <Layout>
      <Link to="/"> Go To Home </Link>
      <h1>{title}</h1>
      <CardColumns>
        <Link to="/search"> All </Link>
        <Link to="/rent"> Rent </Link>
        <Link to="/buy"> Buy </Link>
        {propertyData.map(property => (
          <Card key={property.id}>
            {property.coverImage ? (
              <Card.Img variant="top" src={property.coverImage.url} />
            ) : (
              <Image />
            )}
            <Card.Body>
              <Card.Title>{property.projectName}</Card.Title>
              <Card.Text>
                {property.unitAndBuildingNo}, {property.projectName}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                {property.bhk} | {property.forRent} | {property.unitPrice}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </Layout>
  )
}

export default Properties
