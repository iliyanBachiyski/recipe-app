import React from "react";
import classes from "./SearchOption.module.css";

const SearchOption = () => {
  return (
    <div className={classes.Option}>
      <label className={classes.Label}>Option 1</label>
      <input className={classes.Checkbox} type="checkbox" />
    </div>
  );
};

export default SearchOption;
