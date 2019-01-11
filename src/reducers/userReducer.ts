import { LOGIN } from "../actions/actionTypes";
import { UserState } from "./initialStateInterface";

const init: UserState = {
  accessToken: ""
}

export default function userReducer(
  state = init,
  action: { type: any; payload: any }
) {
  let newState;
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN Action");
      newState = { "accessToken": action.payload };
      return newState;
    default:
      return state;
  }
}
