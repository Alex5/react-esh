const ON_INGR_INPUT = "ON_INGR_INPUT";
const FOUND_INGREDIENTS = "FOUND_INGREDIENTS";

let initialState = {
  inputValue: "",
  foundIngredients: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_INGR_INPUT:
      return { ...state, inputValue: action.value };
    case FOUND_INGREDIENTS:
      return { ...state, foundIngredients: action.ingredients };
    default:
      return state;
  }
};

export const setFoundIngredients = (ingredients) => ({
  type: FOUND_INGREDIENTS,
  ingredients,
});

export const setIngrValue = (value) => ({ type: ON_INGR_INPUT, value });

export default searchReducer;
