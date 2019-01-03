import initialState from "./initialState";

export default function tempReducer(state = initialState.api) {
  return { api: state };
}
