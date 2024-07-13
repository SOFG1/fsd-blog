import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 20px;
`;

const StyledLogo = styled(Link)`
  color: greenyellow;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;

type RoutesKey = keyof typeof routes;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">Conduit</StyledLogo>
      <StyledNav>
        {Object.keys(routes).map((p) => (
          <StyledLink to={routes[p as RoutesKey]}>{p}</StyledLink>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};
