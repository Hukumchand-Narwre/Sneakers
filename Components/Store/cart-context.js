import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  count: 0,
  onAdd: () => {},
  onSubtract: () => {},
  onShowCart: () => {},
  showCart: false,
});
export default CartContext;
