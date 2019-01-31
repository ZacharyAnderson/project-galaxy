import * as types from "./actionTypes";

export interface LoginObject {
  access_token: string;
  current_user: string;
  email: string;
  avatar: string;
}

export interface LoginFailedObject {
  msg: string;
}

export interface LoginResponse {
  loggedIn: boolean;
  loginResponse: object;
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

export function removeLoginToken() {
  return {
    type: types.LOGOUT,
    payload: {}
  };
}

export function loginRequest(
  userName: string,
  userPassword: string,
  baseUrl: string
) {
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
        return {
          loggedIn: response.ok,
          loginResponse: response.json()
        } as LoginResponse;
      })
      .then(data => {
        if (data.loggedIn) {
          return dispatch(LoginSuccess(data.loginResponse));
        }
        return dispatch(LoginFailure(data.loginResponse));
      });
  };
}
