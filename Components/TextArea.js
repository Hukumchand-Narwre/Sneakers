import classes from "./TextArea.module.css";
import CartButton from "./UI/Button";
import BasicButtonGroup from "./UI/ButtonGroup";
import CartContext from "./Store/cart-context";
import { useContext } from "react";
const TextArea = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes["textArea-width"]}>
      <p>SNEAKER COMPANY</p>
      <div className={classes.margin}>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div>
        <p className={classes["bottom-para"]}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className={classes["price-box"]}>
        <h3>
          $125.00 <span>50%</span>
        </h3>
        <h5>$250.00</h5>
      </div>
      <div className={classes["button-group"]}>
        <BasicButtonGroup />
        <CartButton
          text="Add to Cart"
          showIcon="true"
          onClick={cartCtx.onShowCart}
        />
      </div>
    </div>
  );
};

export default TextArea;
