import {
  PRODUCT_FETCH_BEGIN,
  PRODUCT_FETCH_COMPLETE,
  PRODUCT_FETCH_ERROR,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  SINGLE_PRODUCT_FETCH_BEGIN,
  SINGLE_PRODUCT_FETCH_COMPLETE,
  SINGLE_PRODUCT_FETCH_ERROR,
} from "../actions";

const ProductsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (action.type === PRODUCT_FETCH_BEGIN) {
    return {
      ...state,
      product_loading: true,
      product_fetchError: false,
    };
  }
  if (action.type === PRODUCT_FETCH_COMPLETE) {
    const featuredProduct = action.payload.filter(
      (items) => items.featured === true
    );
    return {
      ...state,
      product_loading: false,
      productData: [...action.payload],
      featured_productData: [...featuredProduct],
    };
  }
  if (action.type === PRODUCT_FETCH_ERROR) {
    return {
      ...state,
      product_fetchError: true,
      product_loading: false,
    };
  }
  if (action.type === SINGLE_PRODUCT_FETCH_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_fetchError: false,
    };
  }
  if (action.type === SINGLE_PRODUCT_FETCH_COMPLETE) {
    return {
      ...state,
      single_product_loading: false,
      single_productData: action.payload,
    };
  }
  if (action.type === SINGLE_PRODUCT_FETCH_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_fetchError: true,
    };
  }

  return state;
};

export default ProductsReducer;
