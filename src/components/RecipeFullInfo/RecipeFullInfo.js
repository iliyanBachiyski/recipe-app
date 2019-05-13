import React from "react";
import classes from "./RecipeFullInfo.module.css";

const RecipeFullInfo = props => {
  const { recipe } = props.value;
  let totalTime = props.value.recipe.totalTime;
  if (totalTime === 0) {
    totalTime = "N/A";
  } else {
    totalTime = `${totalTime} min.`;
  }
  let labels = [];
  let calorieAmount = [];
  if (recipe) {
    labels = [...recipe.dietLabels, ...recipe.healthLabels].join(" / ");
    for (let key in recipe.totalNutrients) {
      const item = recipe.totalNutrients[key];
      calorieAmount.push(
        <span key={key}>
          {item.label}: {item.quantity.toFixed(0)} {item.unit}.
        </span>
      );
    }
    calorieAmount = calorieAmount.slice(0, 10);
  }
  return (
    <div className={classes.FullInfoContainer}>
      <div className={classes.FirstLineInfo}>
        <p className={classes.LabelParagraph}>{recipe.label}</p>
        <p>Time: {totalTime} </p>
      </div>
      <div className={classes.MiddLineInfo}>
        <div>
          <div className={classes.Title}>Ingredients</div>
          {recipe.ingredientLines.map(value => (
            <span key={value}>{value}</span>
          ))}
        </div>
        <div>
          <img src={recipe.image} alt="Food" />
        </div>
        <div>
          <div className={classes.Title}>Calorie Amount</div>
          <span>Total: {recipe.calories.toFixed(0)} kcal.</span>
          {calorieAmount}
        </div>
      </div>
      <div>{labels}</div>
    </div>
  );
};

export default RecipeFullInfo;
