import React, { Component } from "react";
import Card from "./Card/Card";
import classes from "./CardContainer.module.css";
import Button from "../Button/Button";

class CardContainer extends Component {
  handleBackClick = () => {
    this.props.history.replace("/");
  };
  render() {
    let cards = null;
    if (this.props.recipes.length > 0) {
      cards = (
        <React.Fragment>
          {this.props.recipes.map(record => (
            <Card key={record.recipe.uri} recipe={record.recipe} />
          ))}
        </React.Fragment>
      );
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
