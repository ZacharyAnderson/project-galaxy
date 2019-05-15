export interface ApiState {
  api: string;
  s3_bucket: string;
}

export interface UserState {
  accessToken: string;
  current_user: string;
  email: string;
  isLoggedIn: boolean;
  avatar: string;
  loginFailed: boolean;
  failedMessage: string;
}

export interface GlobalState {
  api: ApiState;
  user: UserState;
}
