export interface ApiState {
  api: string;
}

export interface UserState {
  accessToken: string;
  isLoggedIn: boolean;
}

export interface GlobalState {
  api: ApiState;
  user: UserState;
}
