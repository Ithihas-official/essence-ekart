import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ productPage, pageDir }) => {
  return (
    <HeroPageWrapper>
      <h3>
        <Link to="/">Home / </Link>
        {productPage ? <Link to="/products">Products / </Link> : ""} {pageDir}
      </h3>
    </HeroPageWrapper>
  );
};

const HeroPageWrapper = styled.article`
  z-index: 1;
  position: fixed;
  top: 5rem;
  width: 100vw;
  height: 2rem;
  padding: 5px;
  text-transform: capitalize;
  background: lightgray;
  color: var(--accentColor);
  padding-left: 2rem;
  a {
    unset: all;
    font-weight: 800;
  }
  h3 {
    padding: 2px;
    font-size: 1rem;
    margin: auto 0;
  }
`;

export default PageHero;
