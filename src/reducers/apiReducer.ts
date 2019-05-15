import { ApiState, GlobalState } from "./initialStateInterface";

const init: ApiState = {
    api: "http://127.0.0.1:5000/api/v1.0/",
    s3_bucket: "http://project-galaxy-test.s3.amazonaws.com/"
};

export default function apiReducer(state = init) {
    return state;
}

export function getApiUrl(state: GlobalState): string {
    return state.api && state.api.api
}

export function getS3Bucket(state: GlobalState): string {
    return state.api.s3_bucket && state.api.s3_bucket
}