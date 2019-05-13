import React from "react";
import Button from "../../Button/Button";
import classes from "./Card.module.css";

const Card = props => {
  const { recipe } = props;
  return (
    <div className={classes.Card}>
      <label className={classes.CardLabel}>{recipe.label}</label>
      <img className={classes.CardImage} src={recipe.image} alt="label" />
      <div className={classes.CardButtons}>
        <Button
          label="Details"
          click={() => {
            props.onDetailsClicked(recipe.index);
          }}
        />
        <Button
          label="Source"
          click={() => window.open(recipe.shareAs, "_blank")}
        />
      </div>
    </div>
  );
};

export default Card;
