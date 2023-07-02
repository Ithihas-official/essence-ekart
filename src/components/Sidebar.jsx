import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "./../assets/essence.png";
import { links } from "./../utils/constants";
import { Link } from "react-router-dom";
import CartLink from "./CartLink.jsx";
import { useProductProvider } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";
const Sidebar = () => {
  const { myUser } = useUserContext();
  const { isSidebarOpen, closeSidebar } = useProductProvider();
  return (
    <SidebarWrapper>
      <aside className={`${isSidebarOpen ? "sidebar showSidebar" : "sidebar"}`}>
        <div className="sidebarHeader">
          <img className="logo" src={logo} alt="essence" />
          <button
            type="button"
            className="closeSidebarButton"
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="sidebarLinks">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {
            myUser && <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          }
        </ul>
        <CartLink />
      </aside>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  .sidebarHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .closeSidebarButton {
    font-size: 1.7rem;
    background: transparent;
    border-color: transparent;
    color: var(--txtColor);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .logo {
    justify-self: center;
    height: 90px;
  }
  .sidebarLinks {
    padding: 0;
    a {
      display: block;
      font-weight: 600;
      text-transform: capitalize;
      color: var(--txtColor);
      padding: 1rem;
      transition: all 0.4s linear;
      :hover {
        padding-left: 1.8rem;
        background: lightgray;
        color: var(--accentColor);
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .showSidebar {
    background: var(--bgColor);
    transform: translate(0);
    z-index: 5;
  }
  .cartToggle {
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
