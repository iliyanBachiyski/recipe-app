import React from "react";
import Button from "../../Button/Button";
import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.Card}>
      <label className={classes.CardLabel}>Chicken Vesuvio</label>
      <img
        className={classes.CardImage}
        src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
        alt="label"
      />
      <div className={classes.CardButtons}>
        <Button label="Details" />
        <Button label="Source" />
      </div>
    </div>
  );
};

export default Card;
