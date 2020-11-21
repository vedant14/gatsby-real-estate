import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const CardConstant = styled.div`
	padding: 20px;
	color: ${colors.ivory};
	margin: 30px 10px;
	border-radius: 20px;
	box-shadow: ${colors.deepGrey} 5px 10px 10px;
	transition: all 0.3s ease-in-out;
	h2 {
		margin-bottom: 1px;
		padding-bottom: 1px;
	}
	h5 {
		margin-top: 1px;
		margin-bottom: 5px;
		font-style: italic;
		font-size: 1rem;
	}
	:hover {
		transform: translate3d(0px, -1px, 0px);
	}
`

export const Card = styled(CardConstant)`
	background-color: ${colors.primaryAccent};
`
export const PrimaryCard = styled(CardConstant)`
	padding-bottom: 25px;
	padding-top: 25px;
	background-color: ${colors.secondaryAccent};
`

export const Section = styled(Container)`
	margin-top: 60px;
	margin-bottom: 60px;
`
