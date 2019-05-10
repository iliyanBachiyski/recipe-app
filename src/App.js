import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import SearchCard from "./components/SeacrchCard/SearchCard";

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
          <div className={classes.SearchCardContainer}>
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
          <Button label="Search" />
        </div>
      </div>
    );
  }
}

export default App;
