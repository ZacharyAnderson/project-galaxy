import { ApiState, GlobalState } from "./initialStateInterface";

const init: ApiState = {
    api: "http://127.0.0.1:5000/api/v1.0/"
};

export default function apiReducer(state = init) {
    return state;
}

export function getApiUrl(state: GlobalState): string {
    return state.api && state.api.api
}