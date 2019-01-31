import { LoginAction } from "../actions/actions";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";
import { GlobalState } from "./initialStateInterface";

const init: UserState = {
  accessToken: "",
  current_user: "",
  email: "",
  avatar: "",
  isLoggedIn: false,
  loginFailed: false,
  failedMessage: ""
};

export default function userReducer(state = init, action: LoginAction) {
  let newState;
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS Action");
      console.log(action.payload);
      newState = {
        accessToken: action.payload.access_token,
        current_user: action.payload.current_user,
        email: action.payload.email,
        avatar: action.payload.avatar,
        isLoggedIn: true
      };
      return newState;
    case LOGIN_FAILURE:
      console.log("LOGIN_FAILURE Action");
      console.log(action.payload);
      newState = {
        loginFailed: true,
        failedMessage: action.payload.msg
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

export function getLoginFailed(state: GlobalState): boolean {
  return state.user && state.user.loginFailed;
}

export function getFailedMessaged(state: GlobalState): string {
  return state.user && state.user.failedMessage;
}
