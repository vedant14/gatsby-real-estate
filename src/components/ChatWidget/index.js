import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

import { Modal, Button } from "react-bootstrap"
import Img from "gatsby-image"
import { Widget, ChatWindow, ChatBody, Chat } from "./ChatWidget.styles"

const ChatWidget = () => {
  function Example() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const data = useMetaDataQuery()

    const image = useStaticQuery(graphql`
      query MyQuery {
        file(name: { eq: "whatsapp" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
      <React.Fragment>
        <Widget variant="primary" onClick={handleShow}>
          <Img fluid={image.file.childImageSharp.fluid} />
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
                <p>{data.author}</p>
              </Chat>
              <Button
                href={`https://wa.me/${data.whatsapp}?text=I%20saw%20your%20website%20and%20I%20am%20interested%20in%20your%20services.`}
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
