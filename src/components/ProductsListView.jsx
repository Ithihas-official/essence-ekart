import styled from "styled-components";
import { useFilterProvider } from "../context/FilterContext";
import { Link } from "react-router-dom";
import { formatCurrency } from "./../utils/formatter.js";

const ProductsListView = () => {
  const { filter_products } = useFilterProvider();
  return (
    <ProductsListviewWrapper className="ProductsGridviewWrapper">
      {filter_products.map((product) => {
        const { name, id, price, image, company } = product;

        return (
          <article className="ListProductContainer" key={id}>
            <Link to={`/products/${id}`}>
              <img src={image} alt={name} />
            </Link>
            <div className="ListproductNamePriceContainer">
              <h3>{name}</h3>
              <h4>{formatCurrency(price)}</h4>
              <p>
                company: <span>{company}</span>
              </p>
            </div>
          </article>
        );
      })}
    </ProductsListviewWrapper>
  );
};
const ProductsListviewWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  flex-flow: column nowrap;
  .ListProductContainer {
    width: 90vw;
    padding: 0.8rem;
    display: flex;
    margin: 0 auto;
    align-items: start;
    justify-content: space-around;
    img {
      aspect-ratio: 4 / 3;
      width: 40vw;
      object-fit: cover;
    }
    :hover {
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem lightgray;
    }
  }
  .ListproductNamePriceContainer {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: start;
    padding: 0.5rem;
    padding-left: 1rem;
    h3 {
      position: absolute;
      top: -1rem;
      text-transform: capitalize;
      line-height: 1;
      font-weight: 500;
      font-size: 1.1rem;
    }
    p {
      position: absolute;
      top: 2rem;
      font-size: 1rem;
      line-height: 1;
      text-transform: capitalize;
      font-weight: 300;
    }
    h4 {
      position: absolute;
      top: 3.5rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1;
      text-transform: capitalize;
    }
  }
  @media screen and (min-width: 992px) {
    flex-flow: row wrap;
    gap: 1rem;
    .ListProductContainer {
      width: 25rem;
      img {
        aspect-ratio: 4 / 3;
        width: 15rem;
        object-fit: cover;
      }
    }
  }
`;

export default ProductsListView;
