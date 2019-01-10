import { LOGIN } from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(
  state = initialState,
  action: { type: any; userReducer: any }
) {
  let newState;
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN Action");
      newState = action.userReducer;
      return newState;
    default:
      return state;
  }
}
