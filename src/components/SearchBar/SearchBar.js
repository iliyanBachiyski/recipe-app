import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = props => {
  return (
    <div className={classes.SearchBar}>
      <input
        {...props.inputConfig}
        onChange={props.onChangeHadler}
        value={props.value}
      />
    </div>
  );
};

export default SearchBar;
