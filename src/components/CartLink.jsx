import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartProvider } from "../context/CartContext";
import { useProductProvider } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";

const CartLink = () => {
  const { myUser, loginWithRedirect, userLogout } = useUserContext();
  const { closeSidebar } = useProductProvider();
  const { totalProducts } = useCartProvider();
  return (
    <CartLinkWrapper className="cartToggle">
      <Link to="/cart" className="cartIconContainer" onClick={closeSidebar}>
        <span className="cartIcon">
          <FaShoppingCart />
          <span className="cartCountContainer">{totalProducts}</span>
        </span>
      </Link>

      {myUser
        ? (
          <button
            className="authButtonContainer"
            type="button"
            onClick={userLogout}
          >
            <span>
              <FaUserMinus />
            </span>
          </button>
        )
        : (
          <button
            type="button"
            onClick={loginWithRedirect}
            className="authButtonContainer"
          >
            <span>
              <FaUserPlus />
            </span>
          </button>
        )}
    </CartLinkWrapper>
  );
};

const CartLinkWrapper = styled.div`
  width: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .cartIcon {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      color: var(--txtColor);
      font-size: 1.5rem;
    }
  }
  .cartCountContainer {
    color: var(--bgColor);
    position: absolute;
    top: -12px;
    left: 8px;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    border-radius: 3rem;
    background: var(--accentColor);
    font-size: 0.9rem;
  }
  .authButtonContainer {
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default CartLink;
