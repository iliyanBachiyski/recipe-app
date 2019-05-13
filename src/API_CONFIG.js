const APP_ID = "aa9307be";
const APP_KEY = "5923d149d123e27fb4e02799a5445087";
export const VALUE_PATTERN = "$[value]";
export const DIET_PATTERN = `&diet=${VALUE_PATTERN}`;
export const HEALTH_PATTERN = `&health=${VALUE_PATTERN}`;
export const DISH_PATTERN = `&dishType=${VALUE_PATTERN}`;
export const SEARCH_BY_NAME_URL = `https://api.edamam.com/search?q=${VALUE_PATTERN}&app_id=${APP_ID}&app_key=${APP_KEY}`;
