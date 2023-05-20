import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <StyledNav className={`flex items-center justify-center pt-8 `}>
      <NavLink to={"/"} className="text-4xl font-bold">
        Project ZEUS
      </NavLink>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  & form {
    & input {
      outline: none;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 30px;
      width: 390px;
      height: 45px;
      padding: 0 2rem 0.2rem 3.5rem;
      font-size: 1.1rem;

      @media screen and (max-width: 1216px) {
        width: 300px;
      }

      @media screen and (max-width: 1130px) {
        width: 100%;
      }

      @media screen and (max-width: 1076px) {
        width: 390px;
      }
    }
  }

  & .uglr-links {
    & > div > a {
      color: #000;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      margin: 0 1.2rem;
      text-decoration: none;

      &:hover {
        color: var(--color-primary);
      }

      &.active {
        color: var(--color-primary);
      }
    }

    & > .large .cta {
      color: #fff;
    }
  }
`;

const NavDropDownWrapper = styled.div`
  transition: 0.2s all;
  transform-origin: 100% 0;
  background: #fff;
  left: 0;
  width: max-content;
  padding: 1rem 0 1rem;
  z-index: 10 !important;

  & a {
    color: #000;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    display: block;
    width: 100%;
    padding: 0.4rem 1.2rem;

    &:hover {
      color: var(--color-primary);
    }

    &.active {
      color: var(--color-primary);
    }
  }
`;

export default Navbar;
