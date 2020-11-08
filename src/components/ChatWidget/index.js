import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Modal, Button } from "react-bootstrap"
import Img from "gatsby-image"
import {
  Widget,
  ChatWindow,
  ChatBody,
  Chat,
  ChatHead,
} from "./ChatWidget.styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
const ChatWidget = () => {
  function Example() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const data = useStaticQuery(graphql`
      query MyQuery {
        file(name: { eq: "whatsapp" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            whatsapp
          }
        }
      }
    `)
    return (
      <React.Fragment>
        <Widget variant="primary" onClick={handleShow}>
          <Img fluid={data.file.childImageSharp.fluid} /> Chat with us
        </Widget>

        <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          animation={false}
          centered
        >
          <ChatWindow contentClassName="chat">
            <Modal.Header bsPrefix="chathead" closeButton>
              <Modal.Title>
                Hi there 👋
                <p>
                  We are here to help. Chat with us on WhatsApp for any queries.
                </p>
              </Modal.Title>
            </Modal.Header>
            <ChatBody>
              <Chat>
                Hello👋 What service do you need today?
                <p>-Vedant</p>
              </Chat>
              <Button
                href={`https://wa.me/${data.site.siteMetadata.whatsapp}?text=I%20saw%20your%20website%20and%20I%20am%20interested%20in%20your%20services.`}
                target="_blank"
                variant="success"
              >
                Join Chat
              </Button>
            </ChatBody>
          </ChatWindow>
        </Modal>
      </React.Fragment>
    )
  }
  return <Example />
}

export default ChatWidget
