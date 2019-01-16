import { LOGIN, LOGOUT } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";
import { GlobalState } from "./initialStateInterface";

const init: UserState = {
  accessToken: "",
  username: "",
  userEmail: "",
  isLoggedIn: false
};

interface LoginObject {
  access_token: string;
  current_user: string;
  email: string;
}

export default function userReducer(
  state = init,
  action: { type: any; payload: LoginObject }
) {
  let newState;
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN Action");
      newState = {
        accessToken: action.payload.access_token,
        current_user: action.payload.current_user,
        email: action.payload.email,
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
