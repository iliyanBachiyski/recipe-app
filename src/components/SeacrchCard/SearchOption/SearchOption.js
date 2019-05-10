import React from "react";
import classes from "./SearchOption.module.css";

const SearchOption = props => {
  return (
    <div className={classes.Option}>
      <label className={classes.Label}>{props.value}</label>
      <input
        value={props.value}
        className={classes.Checkbox}
        type="checkbox"
        onChange={e => props.changeValue(e.target.value, e.target.checked)}
      />
    </div>
  );
};

export default SearchOption;
