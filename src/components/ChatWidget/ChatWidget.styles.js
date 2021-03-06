import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { ModalDialog, ModalBody } from "react-bootstrap"
export const Widget = styled.div`
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 99;
	font-size: 0.9rem;
	box-shadow: 0 0 5px 0 ${colors.deepDarkGrey};
	border: none;
	outline: none;
	background-color: ${colors.white};
	opacity: 90%;
	cursor: pointer;
	padding: 10px;
	width: 80px;
	border-radius: 5px;
	:hover {
		transition: all 0.5s;
		transform: translateY(-10px);
	}
	img {
		padding: 10px;
	}
`

export const ChatWindow = styled(ModalDialog)`
	position: fixed;
	width: 350px;
	bottom: 20px;
	z-index: 99;
	padding: 5px;
	margin-right: auto;
	margin-left: auto;
	font-size: 18px;
	border: none;
	outline: none;
	@media screen and (min-width: 768px) {
		max-width: 350px;
		right: 30px;
	}
`

export const ChatBody = styled(ModalBody)`
	background-color: ${colors.white};
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;

	.btn {
		border-radius: 30px;
		margin-left: 60px;
		margin-right: 75px;
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
	background: ${colors.greenShade1};
	text-align: right;
	max-width: 75%;
	padding: 10px 15px;
	border-radius: 6px;
	border: 1px solid ${colors.greenShade1};
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
		border-top: 10px solid ${colors.greenShade1};
	}

	::after {
		content: "";
		position: absolute;
		visibility: visible;
		top: 0px;
		right: -8px;
		border: 10px solid transparent ${colors.greenShade1};
		border-top: 10px solid ${colors.greenShade1};
		clear: both;
	}
	p {
		font-size: 0.9rem;
		font-style: italic;
	}
`
