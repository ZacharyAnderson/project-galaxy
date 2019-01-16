import * as types from "./actionTypes";

export function addLoginToken(json: object) {
  return {
    type: types.LOGIN,
    payload: json
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
        if (response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then(data => {
        dispatch(addLoginToken(data));
      });
  };
}

export function removeLoginToken() {
  return {
    type: types.LOGOUT,
    payload: {}
  };
}
