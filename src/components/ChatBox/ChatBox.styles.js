import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { ModalDialog, ModalBody } from "react-bootstrap"

export const ChatWindow = styled(ModalDialog)`
	max-width: 100%;
	width: 350px;
	bottom: 20px;
	z-index: 99;
	margin-right: auto;
	margin-left: auto;
	font-size: 18px;
	border: none;
	outline: none;
	margin-top: 30px;
	@media screen and (min-width: 768px) {
		max-width: 350px;
		right: 0;
		margin-top: 20px;
	}
`

export const ChatBody = styled(ModalBody)`
	background-color: ${colors.white};
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;

	.btn {
		position: relative;
		margin-left: 50px;
		border-radius: 30px;
		width: 200px;
		margin-top: 150px;
		font-size: 1.2rem;
		@media screen and (min-width: 768px) {
			margin-top: 100px;
		}
	}
`

export const Chat = styled.div`
	position: relative;
	background: ${colors.secondaryAccent};
	text-align: right;
	max-width: 75%;
	padding: 10px 15px;
	border-radius: 6px;
	border: 1px solid ${colors.secondaryAccent};
	float: right;
	right: 20px;
	margin-top: 30px;

	::before {
		content: "";
		position: absolute;
		visibility: visible;
		top: -1px;
		right: -10px;
		border: 10px solid transparent;
		border-top: 10px solid ${colors.secondaryAccent};
	}

	::after {
		content: "";
		position: absolute;
		visibility: visible;
		top: 0px;
		right: -8px;
		border: 10px solid transparent ${colors.secondaryAccent};
		border-top: 10px solid ${colors.secondaryAccent};
		clear: both;
	}
	p {
		font-size: 0.9rem;
		font-style: italic;
	}
`
