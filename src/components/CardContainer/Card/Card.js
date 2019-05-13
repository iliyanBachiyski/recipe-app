import React from "react";
import Button from "../../Button/Button";
import classes from "./Card.module.css";

const Card = props => {
  console.log("[Card:Recipe]: ", props.recipe);
  const { recipe } = props;
  return (
    <div className={classes.Card}>
      <label className={classes.CardLabel}>{recipe.label}</label>
      <img className={classes.CardImage} src={recipe.image} alt="label" />
      <div className={classes.CardButtons}>
        <Button label="Details" />
        <Button label="Source" />
      </div>
    </div>
  );
};

export default Card;
