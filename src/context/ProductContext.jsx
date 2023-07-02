import { createContext, useContext, useReducer } from "react";
import ProductsReducer from "../reducers/ProductsReducer";
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
import { useEffect } from "react";
import axios from "axios";
import { products_url } from "../utils/constants";

const ProductContext = createContext();

const productState = {
  isSidebarOpen: false,
  product_loading: false,
  product_FetchError: false,
  single_product_loading: false,
  single_product_fetchError: false,
  productData: [],
  featured_productData: [],
  single_productData: [],
};

export const ProductProvider = ({ children }) => {
  const [state, disptach] = useReducer(ProductsReducer, productState);

  const openSidebar = () => {
    disptach({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    disptach({ type: SIDEBAR_CLOSE });
  };

  const singleProduct = async (url) => {
    disptach({ type: SINGLE_PRODUCT_FETCH_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProductData = response.data;
      disptach({
        type: SINGLE_PRODUCT_FETCH_COMPLETE,
        payload: singleProductData,
      });
    } catch (error) {
      disptach({ type: SINGLE_PRODUCT_FETCH_ERROR });
    }
  };

  const fetchProduct = async (url) => {
    disptach({ type: PRODUCT_FETCH_BEGIN });
    try {
      const response = await axios.get(url);
      const productData = response.data;
      disptach({ type: PRODUCT_FETCH_COMPLETE, payload: productData });
    } catch (error) {
      disptach({ type: PRODUCT_FETCH_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct(products_url);
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, openSidebar, closeSidebar, singleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductProvider = () => useContext(ProductContext);
