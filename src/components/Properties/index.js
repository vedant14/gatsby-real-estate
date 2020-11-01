import React from "react"
import Image from "../image"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  CardColumns,
  Card,
  Footer,
  Body,
  Title,
  Img,
  Text,
} from "react-bootstrap"
const Properties = () => {
  const {
    gcms: { properties },
  } = useStaticQuery(pageQuery)
  return (
    <CardColumns>
      <Link to="/rent"> Rent </Link>
      <Link to="/buy"> Buy </Link>
      {properties.map(({ id, ...property }) => (
        <Card key={id}>
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
  )
}
const pageQuery = graphql`
  {
    gcms {
      properties(orderBy: updatedAt_ASC) {
        id
        unitAndBuildingNo
        unitPrice
        projectName
        bhk
        forRent
        coverImage {
          id
          url
        }
        images {
          id
          url
        }
      }
    }
  }
`
export default Properties
