import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import classes from "./App.module.css";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    searchBarConfig: {
      inputConf: {
        placeholder: "Ingredients..."
      }
    }
  };
  render() {
    return (
      <div className={classes.App}>
        <SearchBar inputConfig={this.state.searchBarConfig.inputConf} />
        <Button label="Search" />
      </div>
    );
  }
}

export default App;
