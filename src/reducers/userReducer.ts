import { LOGIN } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";
import { GlobalState } from "./initialStateInterface";

const init: UserState = {
  accessToken: "",
  isLoggedIn: false
}

export default function userReducer(
  state = init,
  action: { type: any; payload: any }
) {
  let newState;
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN Action");
      newState = {
        "accessToken": action.payload,
        "isLoggedIn": true
      };
      return newState;
    default:
      return state;
  }
}

export function getisLoggedIn(state: GlobalState): boolean {
  return state.user && state.user.isLoggedIn;
}