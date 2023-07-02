import { formatCurrency } from "./../utils/formatter.js";
import styled from "styled-components";
import SingleProductImages from "./SingleProductImages";
import RatingStars from "./RatingStars.jsx";
import AddToCart from "./AddToCart.jsx";
import { useParams } from "react-router-dom";
import PageHero from "./PageHero.jsx";
import { useProductProvider } from "../context/ProductContext";
import { useEffect } from "react";
import { single_product_url } from "../utils/constants";
import ProductLoading from "./ProductLoading";
import ErrorPage from "./ErrorPage";
const SingleProductBase = () => {
  const { id: productId } = useParams();
  const {
    singleProduct,
    single_productData,
    single_product_loading,
    single_product_fetchError,
  } = useProductProvider();

  useEffect(() => {
    singleProduct(`${single_product_url}${productId}`);
  }, [productId]);

  if (single_product_loading) {
    return <ProductLoading />;
  }

  if (single_product_fetchError) {
    return <ErrorPage />;
  }

  const {
    stock,
    price,
    colors,
    images,
    company,
    name,
    description,
    stars,
    reviews,
  } = single_productData;
  return (
    <>
      <PageHero productPage="true" pageDir={name} />
      <SingleProductWrapper>
        <div className="singleProductImgInfoContainer">
          <SingleProductImages images={images} />
          <article className="singleProductInfoContainer">
            <h2>{name}</h2>
            <h4>
              company: <span>{company}</span>
            </h4>
            <RatingStars stars={stars} reviews={reviews} />
            <h3>{formatCurrency(price)}</h3>
            <AddToCart
              stock={stock}
              colors={colors}
              productId={productId}
              product={single_productData}
            />
          </article>
        </div>
        <article className="singleProductDescrptnContainer">
          <p>{description}</p>
        </article>
      </SingleProductWrapper>
    </>
  );
};

const SingleProductWrapper = styled.section`
  width: 95%;
  position: absolute;
  top: 8rem;
  left: 2.5%;
  display: flex;
  flex-flow: column;

  margin-bottom: 3rem;
  .productClrWrapper {
  }
  .singleProductImageContainer {
    width: 100%;
  }
  .singleProductInfoContainer {
    width: 100%;
    padding: 0 2rem;
    h2 {
      text-transform: uppercase;
      line-height: 1;
      font-weight: 500;
    }
    h3 {
      line-height: 1;
      font-weight: 400;
    }
    h4 {
      text-transform: capitalize;
      line-height: 1;
      font-weight: 400;
    }
  }
  .singleProductDescrptnContainer {
    padding: 1rem;
    p {
      text-indent: 4rem;
      font-weight: 300;
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 992px) {
    .singleProductImgInfoContainer {
      display: flex;
      align-items: start;
      justiy-content: space-around;
    }
    .singleProductImageContainer {
      width: 70rem;
    }
    .singleProductInfoContainer {
      h2 {
        text-transform: uppercase;
      }
      h4 {
        text-transform: capitalize;
      }
    }
    .singleProductDescrptnContainer {
      padding: 1rem;
      p {
        text-indent: 4rem;
      }
    }
  }
`;

export default SingleProductBase;
