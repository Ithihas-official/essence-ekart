import styled from "styled-components";
import { useFilterProvider } from "../context/FilterContext";
import { formatCurrency, getUniqueValues } from "./../utils/formatter.js";

const FilterProducts = () => {
  const { all_products: products, filter, filterUpdate } = useFilterProvider();
  const { colors: testColor, max_prize, min_prize, prize } = filter;
  const productCategories = getUniqueValues(products, "category");
  const productCompany = getUniqueValues(products, "company");
  const productColors = getUniqueValues(products, "colors");
  return (
    <FilterProductsWrapper className="FilterProductsWrapper">
      <form onSubmit={(e) => e.preventDefault()} className="filterProductForm">
        <div className="ProductCategoryContainer">
          <label htmlFor="category">category </label>
          <select
            name="category"
            id="category"
            onChange={(e) => filterUpdate(e)}
          >
            {productCategories.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="ProductCompanyContainer">
          <label htmlFor="company">company </label>
          <select name="comapny" id="company" onChange={(e) => filterUpdate(e)}>
            {productCompany.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="ProductColorsContainer">
          <label htmlFor="colors">colors</label>
          <div className="colorContainer">
            <button
              name="colors"
              data-color="All"
              onClick={(e) => filterUpdate(e)}
              className="productColorBtn"
              style={{
                width: "2.5rem",
                background: "var(--bgColor)",
                padding: "1px",
                marginTop: "-0.2rem",
              }}
            >
              All
            </button>
            {productColors.map((item, index) => {
              return (
                <button
                  name="colors"
                  key={index}
                  className={
                    item === testColor
                      ? "productColorBtn borderAround"
                      : "productColorBtn"
                  }
                  data-color={item}
                  style={{ background: item }}
                  onClick={(e) => filterUpdate(e)}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="ProductPriceContainer">
          <label htmlFor="prize">{formatCurrency(prize)}</label>
          <input
            type="range"
            name="prize"
            min={min_prize}
            max={max_prize}
            defaultValue={prize}
            step="5000"
            onChange={(e) => filterUpdate(e)}
          />
        </div>
      </form>
    </FilterProductsWrapper>
  );
};

const FilterProductsWrapper = styled.div`
  width: 95vw;
  padding: 1rem;
  .filterProductForm {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .ProductCategoryContainer {
    width: 40%;
    label {
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1rem;
    }
    select {
      width: 6rem;
      background: var(--bgColor);
      border: 0;
    }
  }
  .ProductCompanyContainer {
    width: 40%;
    label {
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1rem;
    }
    select {
      width: 6rem;
      background: var(--bgColor);
      border: 0;
    }
  }

  .ProductColorsContainer {
    width: 90%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    label {
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1rem;
    }
  }
  .colorContainer {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    button {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      border: 0;
      padding: 3px;
      text-align: center;
    }
  }
  .ProductPriceContainer {
    width: 90%;
    display: flex;
    flex-flow: columns;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    label {
      text-transform: capitalize;
      font-weight: 300;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .filterProductForm {
      width: 100%;
      justify-content: space-evenly;
    }
    .ProductCategoryContainer {
      width: 12rem;
    }
    .ProductCompanyContainer {
      width: 12rem;
    }
    .ProductColorsContainer {
      width: auto;
    }
    .ProductPriceContainer {
      width: 12rem;
    }
  }
`;

export default FilterProducts;
