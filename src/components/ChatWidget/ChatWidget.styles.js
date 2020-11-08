import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Modal, ModalDialog, ModalBody } from "react-bootstrap"
export const Widget = styled.div`
	position: fixed;
	bottom: 50px;
	right: 50px;
	z-index: 99;
	font-size: 18px;
	border: none;
	outline: none;
	background-color: white;
	cursor: pointer;
	padding: 10px;
	border-radius: 10px;
`

export const ChatWindow = styled(ModalDialog)`
	position: fixed;
	bottom: 20px;
	right: 30px;
	z-index: 99;
	font-size: 18px;
	border: none;
	outline: none;
	background-color: "green";
`
export const ChatBody = styled(ModalBody)`
	background-color: green;
`
