import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeItem: (item) => {},
  addItem: (id) => {},
});

export default CartContext;
