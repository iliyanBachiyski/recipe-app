import React, { Component } from "react";
import SearchOption from "./SearchOption/SearchOption";
import classes from "./SearchCard.module.css";

class SearchCard extends Component {
  state = {
    selectedInputs: {}
  };

  changeInputHandler = (value, isChecked) => {
    this.setState(prevState => {
      const newState = {
        selectedInputs: {
          ...prevState.selectedInputs,
          [value]: isChecked
        }
      };
      const title = this.props.title.toLowerCase(newState);
      this.props.selectOptions(title, newState.selectedInputs);
      return newState;
    });
  };
  render() {
    return (
      <div className={classes.Card}>
        <label className={classes.CardLabel}>{this.props.title}</label>
        {this.props.options.map(option => (
          <SearchOption
            value={option}
            key={option}
            changeValue={this.changeInputHandler}
          />
        ))}
      </div>
    );
  }
}

export default SearchCard;
