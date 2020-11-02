import constants from '../utils/constants'
export const initialState = {
    basket: [],
    user: null,
  };
const reducer = (state, action) => {
    switch (action.type) {
      case constants.SET_USER:
        return {
          ...state,
          user: action.value,
        };
      case constants.ADD_TO_BASKET:
        return {
          ...state, 
          basket: [...state.basket, action.value],
        };
      case constants.EMPTY_BASKET:
        return {
          ...state,
          basket: [],
        };
      default:
        return state;
    }
  };
export default reducer;