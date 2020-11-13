import React from "react"
import Layout from "../Layout"
import { Row, Col, Tab, Nav } from "react-bootstrap"
import PropertyCard from "../PropertyCard"
import {
  PropertyHeader,
  NavButton,
  NavPill,
  FilterRow,
  Section,
} from "./Properties.styles"

const Properties = ({ title, propertyData }) => {
  return (
    <Layout>
      <PropertyHeader>
        <h1>{title}</h1>
        <NavButton to="/search" activeClassName="active-hide">
          All Properties
        </NavButton>
        <NavButton to="/search/rent" activeClassName="active-hide">
          For Rent
        </NavButton>
        <NavButton to="/search/buy" activeClassName="active-hide">
          For Buy
        </NavButton>
      </PropertyHeader>
      <Tab.Container id="left-tabs-example" defaultActiveKey="all">
        <FilterRow>
          <Nav variant="pills" fill="true">
            <NavPill>
              <Nav.Link eventKey="all">Any</Nav.Link>
            </NavPill>
            <NavPill>
              <Nav.Link eventKey="1">1 BHK</Nav.Link>
            </NavPill>
            <NavPill>
              <Nav.Link eventKey="2">2 BHK</Nav.Link>
            </NavPill>
            <NavPill>
              <Nav.Link eventKey="3">3 BHK</Nav.Link>
            </NavPill>
            <NavPill>
              <Nav.Link eventKey="4">4 +</Nav.Link>
            </NavPill>
          </Nav>
        </FilterRow>
        <Section>
          <Tab.Content>
            <Tab.Pane eventKey="all">
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
            </Tab.Pane>
            <Tab.Pane eventKey="1">
              <Row>
                {propertyData.map(property => (
                  <React.Fragment>
                    {property.bhk == "1" ? (
                      <Col md={4} sm={6} xs={6}>
                        <PropertyCard
                          id={property.id}
                          coverImage={
                            property.coverImage
                              ? property.coverImage.url
                              : "null"
                          }
                          bhk={property.bhk}
                          projectName={property.projectName}
                          unitAndBuildingNo={property.unitAndBuildingNo}
                          forRent={property.forRent}
                          unitPrice={property.unitPrice}
                        />
                      </Col>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <Row>
                {propertyData.map(property => (
                  <React.Fragment>
                    {property.bhk == "2" ? (
                      <Col md={4} sm={6} xs={6}>
                        <PropertyCard
                          id={property.id}
                          coverImage={
                            property.coverImage
                              ? property.coverImage.url
                              : "null"
                          }
                          bhk={property.bhk}
                          projectName={property.projectName}
                          unitAndBuildingNo={property.unitAndBuildingNo}
                          forRent={property.forRent}
                          unitPrice={property.unitPrice}
                        />
                      </Col>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <Row>
                {propertyData.map(property => (
                  <React.Fragment>
                    {property.bhk == "3" ? (
                      <Col md={4} sm={6} xs={6}>
                        <PropertyCard
                          id={property.id}
                          coverImage={
                            property.coverImage
                              ? property.coverImage.url
                              : "null"
                          }
                          bhk={property.bhk}
                          projectName={property.projectName}
                          unitAndBuildingNo={property.unitAndBuildingNo}
                          forRent={property.forRent}
                          unitPrice={property.unitPrice}
                        />
                      </Col>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="4">
              <Row>
                {propertyData.map(property => (
                  <React.Fragment>
                    {property.bhk >= "4" ? (
                      <Col md={4} sm={6} xs={6}>
                        <PropertyCard
                          id={property.id}
                          coverImage={
                            property.coverImage
                              ? property.coverImage.url
                              : "null"
                          }
                          bhk={property.bhk}
                          projectName={property.projectName}
                          unitAndBuildingNo={property.unitAndBuildingNo}
                          forRent={property.forRent}
                          unitPrice={property.unitPrice}
                        />
                      </Col>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Section>
      </Tab.Container>
    </Layout>
  )
}

export default Properties
