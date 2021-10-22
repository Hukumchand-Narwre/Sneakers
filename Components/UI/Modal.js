import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const BackDrop = (props) => {
  const backdropStyle = `${classes.backdrop} ${
    props.sideBar === "true" ? classes["backdrop-background"] : ""
  }`;
  return <div className={backdropStyle} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  const modalStyle = `${classes.modal} ${
    props.sideBar === "true" ? classes["side-bar"] : " "
  }`;
  return (
    <div className={modalStyle}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop sideBar={props.sideBar} onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay sideBar={props.sideBar}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
