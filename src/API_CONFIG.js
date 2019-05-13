const APP_ID = "aa9307be";
const APP_KEY = "a3be6c487ccd006ad1d4cbd4370b96c5";
export const VALUE_PATTERN = "$[value]";
export const DIET_PATTERN = `&diet=${VALUE_PATTERN}`;
export const HEALTH_PATTERN = `&health=${VALUE_PATTERN}`;
export const DISH_PATTERN = `&dishType=${VALUE_PATTERN}`;
export const SEARCH_BY_NAME_URL = `https://api.edamam.com/search?q=${VALUE_PATTERN}&app_id=${APP_ID}&app_key=${APP_KEY}`;
