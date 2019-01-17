export interface ApiState {
  api: string;
}

export interface UserState {
  accessToken: string;
  current_user: string;
  email: string;
  isLoggedIn: boolean;
  avatar: string;
}

export interface GlobalState {
  api: ApiState;
  user: UserState;
}
