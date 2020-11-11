import styled from "styled-components"
import { Container, Button } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"

export const Section = styled(Container)`
	padding-bottom: 50px;
	padding-top: 100px;
	h1 {
		margin-bottom: 30px;
	}
`

export const BGColor = styled.div`
	background-color: ${colors.ivory};
`
export const SearchButton = styled(Button)`
	margin-bottom: 50px;
	margin-top: 50px;
	display: flex;
	margin-right: auto;
	background-color: ${colors.blueShade1};
	border: none;
	margin-left: auto;
	padding: 10px;
	box-shadow: 10px 10px;
	color: white;
	border-radius: 30px;
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
		padding: 15px 10px 15px 10px;
		border-radius: 30px;
	}
	:hover {
		background-color: ${colors.blueShade2};
	}
`
