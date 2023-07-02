import styled from "styled-components";
import { useCartProvider } from "../context/CartContext";
import { Link } from "react-router-dom";
import { PageHero, RatingStars } from "../components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { formatCurrency } from "./../utils/formatter.js";
const Cart = () => {
  const {
    items,
    increaseCartProducts,
    decreaseCartProducts,
    totalProducts,
    totalPrice,
    emptyCart,
    removeItem,
  } = useCartProvider();

  if (emptyCart) {
    return (
      <>
        <PageHero pageDir="cart" />
        <EmptyCartWrapper>
          <h1>cart is empty</h1>
        </EmptyCartWrapper>
      </>
    );
  }

  return (
    <>
      <PageHero pageDir="cart" />
      <CartWrapper>
        <div className="cartTotalProducts">
          <h3>total : {totalProducts}</h3>
        </div>
        {items.map((a) => {
          const { id, amount, color, product } = a;
          return (
            <article key={id} className="cartProductContainer">
              <div className="cartProductInfoContainer">
                <Link to={`/products/${id}`}>
                  <img src={product.images[0].url} alt={product.name} />
                </Link>
                <div className="cartProductInfo">
                  <h2>{product.name}</h2>
                  <h3>company : {product.company}</h3>
                  <RatingStars
                    stars={product.stars}
                    reviews={product.reviews}
                  />
                  <button
                    className="cartProductColor"
                    style={{ background: color }}
                  ></button>
                  <h4>{formatCurrency(product.price)}</h4>
                </div>
              </div>
              <div className="cartControllerContainer">
                <div className="cartController">
                  <button
                    className="cartProductDecrease"
                    type="button"
                    onClick={() => decreaseCartProducts(id)}
                  >
                    <FiChevronLeft />
                  </button>
                  <h2>{amount}</h2>
                  <button
                    className="cartProductIncrease"
                    type="button"
                    onClick={() => increaseCartProducts(id)}
                  >
                    <FiChevronRight />
                  </button>
                </div>
                <button
                  className="CartRemoveBtn"
                  type="button"
                  onClick={() => removeItem(id)}
                >
                  remove item
                </button>
              </div>
            </article>
          );
        })}
        <div className="cartTotalPrice">
          <h4>{formatCurrency(totalPrice)}</h4>
        </div>
      </CartWrapper>
    </>
  );
};

const EmptyCartWrapper = styled.section`
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 8rem;
  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem;
    margin: 0 auto;
  }
`;

const CartWrapper = styled.section`
  width: 95vw;
  margin-left: 2vw;
  position: absolute;
  padding: 5px;
  top: 8rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-cotent: center;
  padding-bottom: 3rem;

  .cartTotalProducts {
    width: 100%;
    h3 {
      text-align: right;
      font-size: 1.2rem;
      padding: 0 2rem;
      font-weight: 300;
    }
  }

  .cartProductInfoContainer {
    width: 90%;
    display: flex;
    flex-flow:column;
    img {
      width: 90%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }
    h2 {
      text-align: left;
      font-size: 1.4rem;
      padding: 0.5rem;
      font-weight: 500;
      text-transform: capitalize;
    }
    h3 {
      margin-top: -1.8rem;
      text-align: left;
      font-size: 1rem;
      padding: 0.5rem;
      font-weight: 300;
      text-transform: capitalize;
    }
    h4 {
      margin-top: -1.8rem;
      font-size: 1rem;
      padding: 0.5rem;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  .cartProductContainer {
    width: 90%;
    padding:0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .cartProductColor {
    position: relative;
    top: -1.5rem;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 5px;
    border-radius: 100%;
  }

  .cartRating {
    margin-top: -1.8rem;
  }

  .cartControllerContainer {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .CartRemoveBtn {
    background: var(--bgColor);
    padding: 1px;
    width: 9rem;
    border: lightgray solid 2px;
  }

  .cartController {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button {
      width: 2rem;
      height: 2rem;
      padding: 1px;
      background: var(--bgColor);
      border: lightgray solid 1px;
      border-radius: 100%;
    }
  }

  .cartTotalPrice {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: end;
    align-items: end;
    padding: 0.3rem;
    h4 {
      font-size: 1rem;
      padding: 0.5rem;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 992px) {
    .cartProductInfoContainer {
      width: 70%;
      display: flex;
          flex-flow:row;
      justify-content: start;
      align-items: start;
      h2 {
        margin-top: -0.9rem;
      }
    }
    .cartProductContainer {
      flex-flow: row;
    }
  }
`;

export default Cart;
