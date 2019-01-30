import * as types from "./actionTypes";

export interface LoginObject {
  access_token: string;
  current_user: string;
  email: string;
  avatar: string;
}

export interface LoginFailedObject {
  failedMessage: string;
}

export type LoginAction =
  | { type: "LOGIN_SUCCESS"; payload: LoginObject }
  | { type: "LOGIN_FAILURE"; payload: LoginFailedObject }
  | { type: "LOGOUT"; payload: void };

export function LoginSuccess(json: object) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: json
  };
}

export function LoginFailure(json: object) {
  return {
    type: types.LOGIN_FAILURE,
    payload: json
  };
}

export function loginRequest(
  userName: string,
  userPassword: string,
  baseUrl: string
) {
  let loginStatus: boolean;
  return (dispatch: (arg0: { type: string; payload: object }) => void) => {
    return fetch(baseUrl + "login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        username: userName,
        password: userPassword
      }
    })
      .then(response => {
        if (response.ok) {
          loginStatus = true;
          return response.json();
        } else {
          loginStatus = false;
          return response.json();
        }
      })
      .then(data => {
        if (loginStatus) {
          dispatch(LoginSuccess(data));
        } else {
          dispatch(LoginFailure(data));
        }
      });
  };
}

export function removeLoginToken() {
  return {
    type: types.LOGOUT,
    payload: {}
  };
}
