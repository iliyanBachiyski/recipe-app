import React, { Component } from "react";
import SearchOption from "./SearchOption/SearchOption";
import classes from "./SearchCard.module.css";

class SearchCard extends Component {
  render() {
    return (
      <div className={classes.Card}>
        <label className={classes.CardLabel}>Card</label>
        <SearchOption />
        <SearchOption />
        <SearchOption />
        <SearchOption />
        <SearchOption />
      </div>
    );
  }
}

export default SearchCard;
