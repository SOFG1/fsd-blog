import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: orange;
    padding: 20px;
`


const StyledLogo = styled(Link)`
    color: greenyellow;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
`


export const Header = () => {
    return <StyledHeader>
        <StyledLogo to="/">Conduit</StyledLogo>
    </StyledHeader>
}