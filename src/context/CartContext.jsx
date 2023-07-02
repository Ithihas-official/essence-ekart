import {
  ADD_TO_CART,
  CART_DECREASE_PRODUCT,
  CART_INCREASE_PRODUCT,
  CART_REMOVE_ITEM,
  EMPTY_CART,
  TOTAL_CART_PRODUCTS,
} from "../actions";
import { EMPTY_CART_USER } from "../actions.js";
import CartReducer from "../reducers/CartReducer";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useUserContext } from "./UserContext.jsx";

const CartContext = createContext();

const localCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const cartState = {
  emptyCart: true,
  items: localCart(),
  totalProducts: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, cartState);
  const {cartLogout}=useUserContext();


  const { items } = state;
  useEffect(() => {
    dispatch({ type: TOTAL_CART_PRODUCTS });
    dispatch({ type: EMPTY_CART });
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

useEffect(()=>{
  if(cartLogout){
    emptyCartUser()
  }
},[cartLogout])

  const removeItem = (id) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
  };

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id: id, color: color, amount: amount, product: product },
    });
  };

  const emptyCartUser = () => {
    dispatch({ type: EMPTY_CART_USER });
  };

  const increaseCartProducts = (id) => {
    dispatch({ type: CART_INCREASE_PRODUCT, payload: id });
  };
  const decreaseCartProducts = (id) => {
    dispatch({ type: CART_DECREASE_PRODUCT, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseCartProducts,
        decreaseCartProducts,
        removeItem,
        emptyCartUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCartProvider = () => useContext(CartContext);
