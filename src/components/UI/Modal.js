import React from "react";
import classes from "./Modal.module.css";
import REACTDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCartHandler}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {REACTDOM.createPortal(<Backdrop hideCartHandler={props.hideCartHandler}/>, portalElement)}
      {REACTDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
