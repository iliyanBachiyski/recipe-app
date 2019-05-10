import React, { Component } from "react";
import Card from "./Card/Card";
import classes from "./CardContainer.module.css";

class CardContainer extends Component {
  render() {
    return (
      <div className={classes.CardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardContainer;
