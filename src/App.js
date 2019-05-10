import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import SearchCard from "./components/SeacrchCard/SearchCard";
import CardContainer from "./components/CardContainer/CardContainer";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    searchBarConfig: {
      inputConf: {
        placeholder: "Ingredients..."
      }
    },
    searchCards: {
      diet: {
        label: "Diet",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedOptions: {}
      },
      health: {
        label: "Health",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedOptions: {}
      },
      dishType: {
        label: "Dish Type",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedOptions: {}
      }
    }
  };
  selectOptionsHandler = (value, selectedOptions) => {
    if (value === "dish type") {
      value = "dishType";
    }
    this.setState(prevState => {
      return {
        searchCards: {
          diet: { ...prevState.searchCards.diet },
          health: { ...prevState.searchCards.health },
          dishType: { ...prevState.searchCards.dishType },
          [value]: { ...prevState.searchCards[value], selectedOptions }
        }
      };
    });
  };
  render() {
    const searchCards = [];
    for (let key in this.state.searchCards) {
      searchCards.push(
        <SearchCard
          title={this.state.searchCards[key].label}
          options={this.state.searchCards[key].options}
          selectOptions={this.selectOptionsHandler}
          key={key}
        />
      );
    }
    return (
      <div className={classes.App}>
        <div className={classes.Wrapper}>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <SearchBar inputConfig={this.state.searchBarConfig.inputConf} />
                <div className={classes.SearchCardContainer}>{searchCards}</div>
                <Button label="Search" />
              </React.Fragment>
            )}
          />
          <Route path="/recipes" render={() => <CardContainer />} />
        </div>
      </div>
    );
  }
}

export default App;
