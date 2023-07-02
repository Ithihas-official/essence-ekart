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

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCT) {
    const product_price = action.payload.map((item) => item.price);
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
      filter: {
        ...state.filter,
        max_prize: Math.max(...product_price),
        prize: Math.max(...product_price),
        min_prize: Math.min(...product_price),
      },
    };
  }
  if (action.type === TOGGLE_GRID) {
    return {
      ...state,
      gridview: true,
    };
  }
  if (action.type === TOGGLE_LIST) {
    return {
      ...state,
      gridview: false,
    };
  }
  if (action.type === TOGGLE_FILTER) {
    return {
      ...state,
      filter_toggle: !state.filter_toggle,
    };
  }
  if (action.type === SORT_UPDATE) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === FILTER_UPDATE) {
    const name = action.payload.name;
    const value = action.payload.value;
    return {
      ...state,
      filter: { ...state.filter, [name]: value },
    };
  }
  if (action.type === SORT_PRODUCT) {
    let newProduct = [];
    const { sort, filter_products } = state;
    if (sort === "price-lowest") {
      newProduct = filter_products.sort((item1, item2) => {
        return item1.price - item2.price;
      });
    }

    if (sort === "price-highest") {
      newProduct = filter_products.sort((item1, item2) => {
        return item2.price - item1.price;
      });
    }

    if (sort === "alpha-a") {
      newProduct = filter_products.sort((item1, item2) => {
        return item1.name.localeCompare(item2.name);
      });
    }

    if (sort === "alpha-z") {
      newProduct = filter_products.sort((item1, item2) => {
        return item2.name.localeCompare(item1.name);
      });
    }
    return {
      ...state,
      filter_products: [...newProduct],
    };
  }
  if (action.type === FILTER_PRODUCT) {
    const { all_products, filter } = state;
    const { category, company, prize, colors } = filter;
    let newProduct = [...all_products];
    if (category !== "All") {
      newProduct = newProduct.filter((item) => item.category === category);
      console.log(newProduct);
    }
    if (company !== "All") {
      newProduct = newProduct.filter((item) => item.company === company);
      console.log(newProduct);
    }
    if (colors !== "All") {
      newProduct = newProduct.filter((item) => {
        const temp = item.colors;
        return temp.find((c) => c === colors);
      });
      console.log(newProduct);
    }

    newProduct = newProduct.filter((item) => item.price <= prize);

    return {
      ...state,
      filter_products: newProduct,
    };
  }

  return state;
};

export default filterReducer;
