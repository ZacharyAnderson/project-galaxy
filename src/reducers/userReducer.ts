import { LOGIN, LOGOUT } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";
import { GlobalState } from "./initialStateInterface";

const init: UserState = {
  accessToken: "",
  current_user: "",
  email: "",
  avatar: "",
  isLoggedIn: false
};

interface LoginObject {
  access_token: string;
  current_user: string;
  email: string;
  avatar: string;
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
        avatar: action.payload.avatar,
        isLoggedIn: true
      };
      return newState;
    case LOGOUT:
      console.log("LOGOUT Action");
      newState = {
        accessToken: "",
        current_user: "",
        email: "",
        avatar: "",
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

export function getUserName(state: GlobalState): string {
  return state.user && state.user.current_user;
}

export function getUserEmail(state: GlobalState): string {
  return state.user && state.user.email;
}

export function getAvatar(state: GlobalState): string {
  return state.user && state.user.avatar;
}
