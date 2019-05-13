import React, { Component } from "react";
import Card from "./Card/Card";
import RecipeFullInfo from "../RecipeFullInfo/RecipeFullInfo";
import classes from "./CardContainer.module.css";
import Button from "../Button/Button";

class CardContainer extends Component {
  state = {
    selectedRecipe: null
  };
  handleBackClick = () => {
    if (this.state.selectedRecipe) {
      this.setState({ selectedRecipe: null });
    } else {
      this.props.history.replace("/");
    }
  };

  detailsHandler = recipeIdx => {
    this.setState({
      selectedRecipe: this.props.recipes[recipeIdx]
    });
  };
  render() {
    let cards = null;
    if (this.props.recipes.length > 0 && !this.state.selectedRecipe) {
      cards = (
        <React.Fragment>
          {this.props.recipes.map((record, idx) => (
            <Card
              {...this.props}
              key={record.recipe.uri}
              recipe={{
                index: idx,
                label: record.recipe.label,
                image: record.recipe.image,
                shareAs: record.recipe.shareAs
              }}
              onDetailsClicked={this.detailsHandler}
            />
          ))}
        </React.Fragment>
      );
    } else if (this.state.selectedRecipe) {
      cards = <RecipeFullInfo value={this.state.selectedRecipe} />;
    } else {
      cards = <div>No such info</div>;
    }
    return (
      <div className={classes.CardContainer}>
        <div className={classes.BackContainer}>
          <Button click={this.handleBackClick} label="Back" />
        </div>
        {cards}
      </div>
    );
  }
}

export default CardContainer;
