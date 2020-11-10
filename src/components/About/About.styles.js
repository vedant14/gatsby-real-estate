import styled from "styled-components"
import { Container } from "react-bootstrap"

export const Section = styled(Container)`
	margin-bottom: 50px;
	margin-top: 100px;
	img {
		height: 300px;
		max-width: 100%;
		border-radius: 5px;
		object-fit: cover;
		float: right;
	}
	@media screen and (min-width: 768px) {
	}
`
