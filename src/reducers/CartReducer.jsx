import {
  ADD_TO_CART,
  CART_DECREASE_PRODUCT,
  CART_INCREASE_PRODUCT,
  CART_REMOVE_ITEM,
  EMPTY_CART,
  TOTAL_CART_PRODUCTS,
} from "../actions";
import { EMPTY_CART_USER } from "../actions.js";

const CartReducer = (state, action) => {
  if (action.type === EMPTY_CART) {
    const { totalProducts } = state;
    let check = true;
    if (totalProducts === 0) {
      check = true;
    } else {
      check = false;
    }
    return ({
      ...state,
      emptyCart: check,
    });
  }

  if (action.type === EMPTY_CART_USER) {
    const newItems = [];
    return {
      ...state,
      items: newItems,
    };
  }

  if (action.type === CART_REMOVE_ITEM) {
    const { items } = state;
    let newItems = [...items];

    newItems = newItems.filter((a) => a.id !== action.payload);

    return {
      ...state,
      items: newItems,
    };
  }

  if (action.type === ADD_TO_CART) {
    const { items } = state;
    const { id, color, amount, product } = action.payload;
    let newItems = [...items];
    const newProduct = {
      id: id,
      color: color,
      amount: amount,
      product: product,
    };
    const check = newItems.find((c) => c.id === newProduct.id);
    console.log(check);
    if (check) {
      newItems = newItems.map((a) => {
        if (a.id === check.id) {
          a.amount = a.amount + amount;
        }
        if (a.amount > a.product.stock) {
          a.amount = a.product.stock;
        }
        return a;
      });
    } else {
      newItems.push(newProduct);
    }

    newItems = newItems.filter((a) => a.amount > 0);

    return {
      ...state,
      items: newItems,
    };
  }

  if (action.type === TOTAL_CART_PRODUCTS) {
    const { items } = state;
    let newTotalProducts = 0;
    let newTotalPrice = 0;
    items.map((a) => {
      newTotalProducts = newTotalProducts + a.amount;
      newTotalPrice = newTotalPrice + a.amount * a.product.price;
      return a;
    });

    return {
      ...state,
      totalProducts: newTotalProducts,
      totalPrice: newTotalPrice,
    };
  }

  if (action.type === CART_INCREASE_PRODUCT) {
    const { items } = state;
    let newItems = [...items];

    newItems = newItems.map((a) => {
      if (a.id === action.payload) {
        a.amount = a.amount + 1;
      }

      if (a.amount > a.product.stock) {
        a.amount = a.product.stock;
      }

      return a;
    });

    return {
      ...state,
      items: newItems,
    };
  }

  if (action.type === CART_DECREASE_PRODUCT) {
    const { items } = state;
    let newItems = [...items];

    newItems = newItems.map((a) => {
      if (a.id === action.payload) {
        a.amount = a.amount - 1;
      }

      if (a.amount < 1) {
        a.amount = 1;
      }

      return a;
    });

    return {
      ...state,
      items: newItems,
    };
  }
};

export default CartReducer;
