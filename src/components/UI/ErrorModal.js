import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </header>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
