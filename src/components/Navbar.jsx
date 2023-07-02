import logo from "./../assets/essence.png";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "./../utils/constants";
import CartLink from "./CartLink";
import { useProductProvider } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { myUser } = useUserContext();
  const { openSidebar } = useProductProvider();
  return (
    <NavWrapper>
      <div className="navContainer">
        <div className="navHeader">
          <Link to="/">
            <img src={logo} alt="essence" />
          </Link>
          <button className="navToggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="navLinks">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {
            myUser && <li><Link to='/checkout'>checkout </Link>  </li>
          }
        </ul>
        <CartLink />
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100vw;
  z-index: 2;
  position: fixed;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: var(--bgColor);
  .navContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 1rem;
  }
  .navHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    img {
      width: 10rem;
    }
  }

  .navToggle {
    background: transparent;
    cursor: pointer;
    border: transparent;
    svg {
      font-size: 1.6rem;
    }
  }

  .navLinks {
    display: none;
  }
  .cartToggle {
    display: none;
  }
  @media (min-width: 992px) {
    .navToggle {
      display: none;
    }

    .navContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navHeader {
      width: 5rem;
    }
    .navLinks {
      list-style-type: none;
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--txtColor);
        unset: all;
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--accentColor);
        }
      }
    }
    .cartToggle {
      display: grid;
    }
  }
`;

export default Navbar;
