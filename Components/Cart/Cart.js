import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose} sideBar="false">
      <div className={classes.cart}>
        <h3>Cart</h3>
      </div>
      <CartItem />
    </Modal>
  );
};

export default Cart;
