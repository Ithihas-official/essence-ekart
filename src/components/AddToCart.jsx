import styled from "styled-components";
import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartProvider } from './../context/CartContext.jsx'

const AddToCart = ({ stock, colors = [], productId, product }) => {
  const { addToCart } = useCartProvider();
  const [selectedColor, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  if (stock == 0) {
    return <h2 style={{ fontWeight: "500" }}>Out Of Stock</h2>;
  }

  const increase = (prev) => {
    const newAmount = prev + 1;
    newAmount > stock ? setAmount(stock) : setAmount(newAmount);
  };
  const decrease = (prev) => {
    const newAmount = prev - 1;
    newAmount < 1 ? setAmount(1) : setAmount(newAmount);
  };

  return (
    <AddToCartWrapper>
      <ProductClrPickerWrapper className="productClrWrapper">
        {colors.map((color, index) => {
          return (
            <div
              className={
                selectedColor === color
                  ? "productColor productColorSelected"
                  : "productColor"
              }
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => setColor(colors[index])}
            ></div>
          );
        })}
      </ProductClrPickerWrapper>
      <StockAmount>
        <div className="amountContainer">
          <button
            className="amountAddToCartBtn "
            type="button"
            onClick={() => decrease(amount)}
          >
            <BiMinus />
          </button>
          <h3 className="amount">{amount}</h3>
          <button
            className="amountAddToCartBtn "
            type="button"
            onClick={() => increase(amount)}
          >
            <BiPlus />
          </button>
        </div>
        <button
          className="addToCartBtn"
          type="button"
          onClick={() => addToCart(productId, selectedColor, amount, product)}
        >
          Add To Cart
        </button>
      </StockAmount>
    </AddToCartWrapper>
  );
};

const StockAmount = styled.div`
  .amountContainer {
    display: flex;
    align-items: center;
  }
  .amountAddToCartBtn {
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 5px;
    background: var(--bgColor);
    border: transparent 0;
    align-self: center;
    svg {
      font-size: 1.2rem;
    }
  }
  .amount {
    text-align: center;
    width: 3rem;
    height: 2.5rem;
    padding-top: 1rem;
  }
  .addToCartBtn {
    width: 14rem;
    height: 3rem;
    text-align: center;
    font-weight: 500;
    background: var(--accentColor);
    color: var(--bgColor);
    text-transform: capitalize;
  }
`;

const ProductClrPickerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  .productColor {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    text-align: center;
  }
  .productColorSelected {
    border: var(--accentColor) solid 2px;
  }
`;

const AddToCartWrapper = styled.div``;

export default AddToCart;
