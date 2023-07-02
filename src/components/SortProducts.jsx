import styled from "styled-components";
import { useFilterProvider } from "../context/FilterContext";
import { BsList, BsGridFill } from "react-icons/bs";
const SortProducts = () => {
  const {
    filter_products: products,
    gridview,
    sortUpdate,
    toggleList,
    toggleGrid,
  } = useFilterProvider();
  return (
    <SortProductsWrapper className="SortProductsWrapper">
      <div className="GridListToggleContainer">
        <div className="gridviewBtnContainer">
          <button
            className={
              gridview
                ? "gridviewToggleBtn gridviewActive"
                : "gridviewToggleBtn"
            }
            onClick={toggleGrid}
          >
            <BsGridFill />
          </button>
          <button
            className={
              gridview
                ? "gridviewToggleBtn"
                : "gridviewToggleBtn gridviewActive"
            }
            onClick={toggleList}
          >
            <BsList />
          </button>
        </div>
        <h5 className="productLength"> products - {products.length} </h5>
      </div>
      <div className="sortProductFormContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="sort">sort </label>
          <select
            name="sort"
            id="sort"
            className="productSortSelector"
            onChange={(e) => sortUpdate(e)}
          >
            <option value="price-lowest"> lowest price </option>
            <option value="price-highest"> highest price </option>
            <option value="alpha-a">(A-Z)</option>
            <option value="alpha-z">(Z-A)</option>
          </select>
        </form>
      </div>
    </SortProductsWrapper>
  );
};

const SortProductsWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  form {
    width: 10rem;
  }

  .productSortSelector {
    unset: all;
    background: var(--bgColor);
    padding: 4px;
    border: 0;
    text-align: center;
    font-weight: 300;
  }

  .GridListToggleContainer {
    width: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .gridviewBtnContainer {
    width: 5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .productLength {
    display: none;
    text-transform: capitalize;
  }
  .gridviewToggleBtn {
    width: 2rem;
    height: 2rem;
    background: var(--bgColor);
    border: black solid 1px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 1rem;
      vertical-align: center;
    }
  }
  .gridviewActive {
    background: var(--accentColor);
  }

  @media screen and (min-width: 992px) {
    .productLength {
      display: block;
    }
    .GridListToggleContainer {
      width: 15rem;
    }
  }
`;

export default SortProducts;
