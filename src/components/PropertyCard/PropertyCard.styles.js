import { Card } from "react-bootstrap"
import styled from "styled-components"

export const PropCard = styled(Card)`
	height: 400px;
	margin: 5px;
	title: 1rem;

	@media screen and (min-width: 768px) {
		height: 450px;
		margin: 20px;
	}
`
