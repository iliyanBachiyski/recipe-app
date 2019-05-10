import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import CardContainer from "./components/CardContainer/CardContainer";

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
        <div className={classes.Wrapper}>
          <SearchBar inputConfig={this.state.searchBarConfig.inputConf} />
          <Button label="Search" />
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
