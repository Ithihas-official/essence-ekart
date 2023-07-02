import styled from "styled-components";
import FilterProducts from "./FilterProducts.jsx";
import SortProducts from "./SortProducts.jsx";
import ProductsGridview from "./ProductsGridview.jsx";
import ProductsListview from "./ProductsListView.jsx";
import { useFilterProvider } from "../context/FilterContext.jsx";
import { useProductProvider } from "../context/ProductContext.jsx";
import ErrorPage from "./ErrorPage.jsx";
const ProductsBase = () => {
  const { gridview, filter_toggle, toggleFilter } = useFilterProvider();
  const { product_fetchError } = useProductProvider();

  if (product_fetchError) {
    return <ErrorPage />;
  }

  return (
    <>
      <ProductBaseWrapper>
        <button className="togglefilterbtn" onClick={toggleFilter}>
          filter
        </button>
        {filter_toggle ? <FilterProducts /> : <hr />}

        <div className="baseSortProductsWrapper">
          <SortProducts />
          {gridview ? <ProductsGridview /> : <ProductsListview />}
        </div>
      </ProductBaseWrapper>
    </>
  );
};

const ProductBaseWrapper = styled.section`
  width: 95%;
  position: absolute;
  top: 8rem;
  margin-left: 2.5%;
  padding-bottom: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;

  .togglefilterbtn {
    width: 3.5rem;
    height: 2rem;
    padding: 1px;
    margin-left: 1rem;
    text-align: center;
    font-weight: 300;
    font-size: 0.8rem;
    background: var(--bgColor);
    border: lightgray solid 2px;
  }

  .baseSortProductsWrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ProductsBase;
