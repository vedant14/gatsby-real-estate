import React from "react"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

import { Modal, Button } from "react-bootstrap"
import { ChatWindow, ChatBody, Chat } from "./ChatBox.styles"

const ChatBox = () => {
  const data = useMetaDataQuery()
  return (
    <ChatWindow contentClassName="chatbox">
      <Modal.Header bsPrefix="chathead">
        <Modal.Title>
          Hi there
          <span role="img" aria-label="hello">
            👋
          </span>
          <p>We are here to help. Chat with us on WhatsApp for any queries.</p>
        </Modal.Title>
      </Modal.Header>
      <ChatBody>
        <Chat>
          Hello
          <span role="img" aria-label="hello">
            👋
          </span>
          Do you want to visit this property?
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
  )
}
export default ChatBox
