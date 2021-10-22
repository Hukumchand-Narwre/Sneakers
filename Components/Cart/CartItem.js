import classes from "./CartItem.module.css";
import thumbnail from "../../Refrence/images/image-product-1-thumbnail.jpg";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import CartButton from "../UI/Button";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const markup = (
    <>
      <div className={classes.cartitem}>
        <img src={thumbnail} alt="img" />

        <div>
          <h4>Fall Limited Edition Sneakers</h4>
          <span className={classes.amount}>$125 x {cartCtx.count} </span>
          <span className={classes.price}>
            &nbsp; &nbsp; ${cartCtx.count * 250}
          </span>
        </div>
      </div>
      <CartButton text="checkout" showIcon="false" />
    </>
  );
  return (
    <div className={classes["main-container"]}>
      {cartCtx.count === 0 ? <p>Your Cart is empty</p> : markup}
    </div>
  );
};

export default CartItem;
