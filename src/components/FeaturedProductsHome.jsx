import styled from "styled-components";
import { useProductProvider } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { formatCurrency } from "./../utils/formatter";
import Loading from "./Loading";
import ErrorLoading from "./ErrorLoading";
import { FaSearch } from "react-icons/fa";

const FeaturedProductsHome = () => {
  const { product_loading, product_fetchError, featured_productData } =
    useProductProvider();
  if (product_loading) {
    return <Loading />;
  }
  if (product_fetchError) {
    return <ErrorLoading />;
  }
  return (
    <FeaturedProductsWrapper>
      <h2>featured products</h2>
      <article className="featuredProductContainerHome">
        {featured_productData.slice(0, 3).map((product) => {
          const { id, name, price, image } = product;
          return (
            <div key={id} className="featuredProductHome">
              <div className="featuredProduct">
                <Link to={"/products/" + id}>
                  <img src={image} alt={name} />
                  <FaSearch />
                </Link>
              </div>
              <div className="featuredPoductInfo">
                <h4>{name}</h4>
                <h4>
                  <span>{formatCurrency(price)}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </article>
    </FeaturedProductsWrapper>
  );
};

const FeaturedProductsWrapper = styled.section`
  width: 95vw;
  margin: 0 auto;
  text-align: center;
  h2 {
    text-transform: uppercase;
    padding: 1rem;
  }
  .featuredProductContainerHome {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .featuredProduct {
    :hover {
      background: black;
      img {
        opacity: 0.3;
      }

      svg {
        display: block;
        opacity: 1;
      }
    }

    position: relative;
    img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    svg {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      font-size: 1.5rem;
      object-fit: fill;
    }
  }
  .featuredPoductInfo {
    width: 100%;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      padding: 0 0.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    .featuredProductContainerHome {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
    }
    .featuredProduct {
      img {
        width: 30rem;
        height: 17rem;
      }
    }
  }
`;

export default FeaturedProductsHome;
