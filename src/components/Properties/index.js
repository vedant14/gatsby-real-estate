import React from "react"
import Layout from "../Layout"
import { Row, Col, Tab, Nav, Container } from "react-bootstrap"
import PropertyCard from "../PropertyCard"
import { Link } from "gatsby"

const Properties = ({ title, propertyData }) => {
  return (
    <Layout>
      <Container>
        <Link to="/"> Go To Home </Link>
        <h1>{title}</h1>
        <Link to="/search"> All </Link>
        <Link to="/search/rent"> Rent </Link>
        <Link to="/search/buy"> Buy </Link>
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          <Row>
            <Nav variant="pills" fill="true">
              <Nav.Item>
                <Nav.Link eventKey="all">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1">1 BHK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">2 BHK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">3 BHK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">4 and Above</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <div>
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
          </div>
        </Tab.Container>
      </Container>
    </Layout>
  )
}

export default Properties
