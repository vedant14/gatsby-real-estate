import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Widget, ChatWindow, ChatBody } from "./ChatWidget.styles"
import { GlobalStyles } from "../../styles/GlobalStyles"

const ChatWidget = () => {
  function Example() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
      <React.Fragment>
        <Widget variant="primary" onClick={handleShow}>
          Launch demo modal
        </Widget>

        <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          animation={false}
          centered
        >
          <ChatWindow>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <ChatBody>
              <p>Modal body text goes here.</p>
            </ChatBody>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </ChatWindow>
        </Modal>
      </React.Fragment>
    )
  }
  return <Example />
}

export default ChatWidget
