import classes from "./Button.module.css";
import CartIcon from "../Cart/CartIcon";
const CartButton = (props) => {
  const icon = (
    <>
      <span className={classes.icon}>
        <CartIcon />
      </span>
    </>
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.showIcon === "true" && icon}
      <span>{props.text}</span>
    </button>
  );
};

export default CartButton;
