import { LOGIN, LOGOUT } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";
import { GlobalState } from "./initialStateInterface";

const init: UserState = {
  accessToken: "",
  isLoggedIn: false
};

export default function userReducer(
  state = init,
  action: { type: any; payload: any }
) {
  let newState;
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN Action");
      newState = {
        accessToken: action.payload,
        isLoggedIn: true
      };
      return newState;
    case LOGOUT:
      console.log("LOGOUT Action");
      newState = {
        accessToken: "",
        isLoggedIn: false
      };
      return newState;
    default:
      return state;
  }
}

export function getIsLoggedIn(state: GlobalState): boolean {
  return state.user && state.user.isLoggedIn;
}

export function getAccessToken(state: GlobalState): string {
  return state.user && state.user.accessToken;
}
