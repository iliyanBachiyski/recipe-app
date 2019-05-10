import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = props => {
  return (
    <div className={classes.SearchBar}>
      <input {...props.inputConfig} />
    </div>
  );
};

export default SearchBar;
