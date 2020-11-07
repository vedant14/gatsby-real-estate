import styled from "styled-components"

export const HeadContainer = styled.div`
	position: relative;
	color: white;
	margin-bottom: 30px;
`
export const IMG = styled.img`
	width: 100%;
	object-fit: cover;
	height: 50vh;
	@media screen and (min-width: 768px) {
		height: 80vh;
	}
`
export const HeadTitle = styled.h1`
	position: absolute;
	z-index: 4;
	bottom: 30%;
	left: 10%;
`
