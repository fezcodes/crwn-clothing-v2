import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  items: [],
  setItems: () => null,
});

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState();
  const value = { items };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
