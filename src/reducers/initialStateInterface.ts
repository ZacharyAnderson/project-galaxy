export interface ApiState {
  api: string;
}

export interface UserState {
  accessToken: string;
  current_user: string;
  email: string;
  isLoggedIn: boolean;
}

export interface GlobalState {
  api: ApiState;
  user: UserState;
}
