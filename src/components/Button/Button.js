import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  return (
    <div className={classes.Button}>
      <button onClick={props.click}>{props.label}</button>
    </div>
  );
};

export default Button;
