import styled from "styled-components"
import { Container, Button } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"

export const Section = styled(Container)`
	padding-bottom: 30px;
	padding-top: 50px;
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
	border: none;
	margin-left: auto;
	padding: 10px 20px;
	color: ${colors.white};
	border-radius: 30px;
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
		padding: 15px 30px;
		border-radius: 30px;
	}
	background-color: ${colors.greenShade1};
	:hover
	{
		background-color: ${colors.greenShade2};
	}
`
