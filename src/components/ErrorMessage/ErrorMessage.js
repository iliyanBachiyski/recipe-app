import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = props => {
  let errorClass = null;
  switch (props.label) {
    case "Danger":
      errorClass = classes.Danger;
      break;
    case "Warning":
      errorClass = classes.Warning;
      break;
    default:
      errorClass = classes.Danger;
  }
  return (
    <div className={classes.Alert}>
      <div className={errorClass}>
        <strong>{props.label}:</strong> {props.errorMessage}
      </div>
    </div>
  );
};

export default ErrorMessage;
