import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  count: 0,
  showCart: false,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedCount = state.count + 1;

    return {
      ...state,
      count: updatedCount,
    };
  }

  if (action.type === "SUBTRACT") {
    const updatedCount = state.count === 0 ? 0 : state.count - 1;

    return {
      ...state,
      count: updatedCount,
    };
  }
  if (action.type === "SHOW") {
    return {
      ...state,
      showCart: true,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addHandler = () => {
    dispatchCartAction({
      type: "ADD",
    });
  };

  const subtractHandler = () => {
    dispatchCartAction({
      type: "SUBTRACT",
    });
  };

  const showCartHandler = () => {
    dispatchCartAction({
      type: "SHOW",
    });
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    count: cartState.count,
    onAdd: addHandler,
    onSubtract: subtractHandler,
    onShowCart: showCartHandler,
    showCart: cartState.showCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
