import * as actionTypes from "../actions/type";
export const hwReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEWHW:
      return [action.payload, ...state];

    case actionTypes.GETALLHW:
      return action.payload;

    default:
      return [];
  }
};
