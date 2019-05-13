import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import SearchCard from "./components/SeacrchCard/SearchCard";
import Spinner from "./components/Spinner/Spinner";
import CardContainer from "./components/CardContainer/CardContainer";
import {
  VALUE_PATTERN,
  DIET_PATTERN,
  HEALTH_PATTERN,
  DISH_PATTERN,
  SEARCH_BY_NAME_URL
} from "./API_CONFIG";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    searchBarConfig: {
      inputConf: {
        placeholder: "Ingredients..."
      },
      value: ""
    },
    searchCards: {
      diet: {
        label: "Diet",
        options: [
          "Balanced",
          "High-Fiber",
          "High-Protein",
          "Low-Carb",
          "Low-Fat"
        ],
        selectedOptions: {}
      },
      health: {
        label: "Health",
        options: ["Vegetarian", "Vegan", "Gluten-free", "Fat-free", "Paleo"],
        selectedOptions: {}
      },
      dishType: {
        label: "Dish Type",
        options: ["Dinner", "Dessert"],
        selectedOptions: {}
      }
    },
    recipes: [],
    isLoading: false
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

  submitSearchHandler = () => {
    if (this.state.searchBarConfig.value !== "") {
      this.setState({ isLoading: true });
      const selectedDietOptions = this.state.searchCards["diet"]
        .selectedOptions;
      const selectedDishTypeOptions = this.state.searchCards["dishType"]
        .selectedOptions;
      const selectedHealthOptions = this.state.searchCards["health"]
        .selectedOptions;

      const diets = this.getSelectedOptions(selectedDietOptions);
      const dishTypes = this.getSelectedOptions(selectedDishTypeOptions);
      const health = this.getSelectedOptions(selectedHealthOptions);

      const dietsLabel = this.getSearchLabelByOption("diet", diets);
      const dishTypesLabel = this.getSearchLabelByOption(
        "dishTypes",
        dishTypes
      );
      const healthLabel = this.getSearchLabelByOption("health", health);
      let url = SEARCH_BY_NAME_URL.replace(
        VALUE_PATTERN,
        this.state.searchBarConfig.value
      );
      url = url
        .concat(dietsLabel)
        .concat(dishTypesLabel)
        .concat(healthLabel);
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.setState({ recipes: data.hits, isLoading: false });
          this.props.history.push("/recipes");
        })
        .catch(err => {
          this.setState({ isLoading: false });
          console.log("[App: Something went wrong!]: ", err);
        });
    } else {
      console.log("Error");
    }
  };

  getSearchLabelByOption = (label, options) => {
    let searchLabelPattern = null;
    let fullSearchLabel = "";
    switch (label) {
      case "diet":
        searchLabelPattern = DIET_PATTERN;
        break;
      case "dishTypes":
        searchLabelPattern = DISH_PATTERN;
        break;
      case "health":
        searchLabelPattern = HEALTH_PATTERN;
        break;
      default:
        searchLabelPattern = "";
    }
    options.forEach(option => {
      const valueToConcat = searchLabelPattern.replace(VALUE_PATTERN, option);
      fullSearchLabel = fullSearchLabel.concat(valueToConcat);
    });
    return fullSearchLabel;
  };

  getSelectedOptions = availableOptions => {
    const options = [];
    for (let key in availableOptions) {
      if (availableOptions[key]) {
        options.push(key.toLowerCase());
      }
    }
    return options;
  };

  onSearchChangeHandler = e => {
    const newValue = e.target.value;
    this.setState({
      searchBarConfig: {
        inputConf: { ...this.state.searchBarConfig.inputConf },
        value: newValue
      }
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
    let spinner = null;
    if (this.state.isLoading) {
      spinner = <Spinner />;
    }
    return (
      <div className={classes.App}>
        <div className={classes.Wrapper}>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <SearchBar
                  inputConfig={this.state.searchBarConfig.inputConf}
                  value={this.state.searchBarConfig.value}
                  onChangeHadler={this.onSearchChangeHandler}
                />
                <div className={classes.SearchCardContainer}>{searchCards}</div>
                {spinner}
                <Button label="Search" click={this.submitSearchHandler} />
              </React.Fragment>
            )}
          />
          <Route
            path="/recipes"
            render={() => <CardContainer recipes={this.state.recipes} />}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
