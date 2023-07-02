import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducers/FilterReducer";
import { useProductProvider } from "./ProductContext";
import {
  FILTER_PRODUCT,
  FILTER_UPDATE,
  LOAD_PRODUCT,
  SORT_PRODUCT,
  SORT_UPDATE,
  TOGGLE_FILTER,
  TOGGLE_GRID,
  TOGGLE_LIST,
} from "../actions";

const FilterContext = createContext();

const filterInitialState = {
  gridview: true,
  filter_toggle: false,
  all_products: [],
  filter_products: [],
  sort: "price-lowest",
  filter: {
    prize: 0,
    max_prize: 0,
    min_prize: 0,
    colors: "All",
    company: "All",
    category: "All",
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  const { productData } = useProductProvider();
  const { filter, sort } = state;
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCT, payload: productData });
  }, [productData]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCT });
    dispatch({ type: SORT_PRODUCT });
  }, [filter, sort]);

  const toggleGrid = () => {
    console.log("grid");
    dispatch({ type: TOGGLE_GRID });
  };
  const toggleList = () => {
    console.log("list");
    dispatch({ type: TOGGLE_LIST });
  };

  const toggleFilter = () => {
    dispatch({ type: TOGGLE_FILTER });
  };

  const sortUpdate = (event) => {
    const value = event.target.value;
    console.log(value);
    dispatch({ type: SORT_UPDATE, payload: value });
  };

  const filterUpdate = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "colors") {
      value = event.target.dataset.color;
    }

    dispatch({ type: FILTER_UPDATE, payload: { name: name, value: value } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        toggleList,
        toggleGrid,
        sortUpdate,
        toggleFilter,
        filterUpdate,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
export const useFilterProvider = () => useContext(FilterContext);
