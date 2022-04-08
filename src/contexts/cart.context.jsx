import { createContext, useState, useEffect } from "react";
import { createAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";

const addCartItem = (cartItems, productToAdd) => {
  const exists = cartItems.find((item) => item.id === productToAdd.id);
  if (exists) {
    return cartItems.map((cartitem) =>
      cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const incrementCartItemById = (cartItems, cartItemToIncrement) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToIncrement.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
const decrementCartItemById = (cartItems, cartItemToDecrement) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const removeCartItemById = (cartItems, cartItemToRemove) => {
  return cartItems.filter(
    (currentCartItem) => currentCartItem.id !== cartItemToRemove.id
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotalUSD: 0,
  increment: () => {},
  decrement: () => {},
  remove: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalUSD, setCartTotalUSD] = useState(0);

  useEffect(() => {
    const newCartUSDCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotalUSD(newCartUSDCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const increment = (cartItemToIncrement) => {
    setCartItems(incrementCartItemById(cartItems, cartItemToIncrement));
  };
  const decrement = (cartItemToDecrement) => {
    setCartItems(decrementCartItemById(cartItems, cartItemToDecrement));
  };
  const remove = (cartItemToRemove) => {
    setCartItems(removeCartItemById(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    increment,
    decrement,
    remove,
    cartTotalUSD,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
