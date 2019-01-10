import * as types from "./actionTypes";

export function addLoginToken(json: object) {
  return { type: types.LOGIN, accessToken: json };
}

export function loginRequest(
  userName: string,
  userPassword: string,
  baseUrl: string
) {
  return (dispatch: (arg0: { type: string; accessToken: object }) => void) => {
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
      .then(data => dispatch(addLoginToken(data.access_token)));
  };
}
