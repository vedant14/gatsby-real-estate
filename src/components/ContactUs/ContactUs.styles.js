import styled from "styled-components"
import { Container, Button } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"

export const BGColor = styled.div`
	background-color: ${colors.ivory};
`
export const Section = styled(Container)`
	padding-bottom: 50px;
	padding-top: 100px;
	iframe {
		max-width: 100%;
		margin: 10px 0px 10px 0px;
		height: 300px;
		width: 500px;
		@media screen and (min-width: 768px) {
			height: 500px;
		}
	}
	h1 {
		margin-bottom: 30px;
	}
`
export const SearchButton = styled(Button)`
	margin-bottom: 30px;
	margin-top: 30px;
	display: flex;
	margin-right: auto;
	margin-left: auto;
	width: fit-content;
	padding: 10px;
	text-align: center;
	box-shadow: 10px 10px;
	color: ${colors.ivory};
	border-radius: 30px;
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
		padding: 15px 10px 15px 10px;
		border-radius: 30px;
		margin-left: 0px;
	}
`
