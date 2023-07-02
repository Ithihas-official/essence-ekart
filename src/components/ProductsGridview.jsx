import styled from "styled-components";
import { useFilterProvider } from "../context/FilterContext";
import { Link } from "react-router-dom";
import { formatCurrency } from "./../utils/formatter.js";

const ProductsGridview = () => {
  const { filter_products } = useFilterProvider();
  return (
    <ProductsGridviewWrapper className="ProductsGridviewWrapper">
      {filter_products.map((product) => {
        const { name, id, price, image } = product;

        return (
          <article className="gridProductContainer" key={id}>
            <Link to={`/products/${id}`}>
              <img src={image} alt={name} />
            </Link>
            <div className="productNamePriceContainer">
              <h5>{name}</h5>
              <h5>
                <span>{formatCurrency(price)}</span>
              </h5>
            </div>
          </article>
        );
      })}
    </ProductsGridviewWrapper>
  );
};

const ProductsGridviewWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  .gridProductContainer {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding: 1.3rem;
    img {
      aspect-ratio: 4 / 3;
      width: 80vw;
      object-fit: cover;
    }
    :hover {
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem lightgray;
    }
  }
  .productNamePriceContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    h5 {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .gridProductContainer {
      img {
        aspect-ratio: 4 / 3;
        width: 20rem;
        object-fit: cover;
      }
    }
  }
`;

export default ProductsGridview;
