import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loginRequest } from "../../../actions/actions";
import { getApiUrl } from "../../../reducers/apiReducer";
import { GlobalState } from "../../../reducers/initialStateInterface";
import {
  getAccessToken,
  getFailedMessaged,
  getLoginFailed,
  getUserName
} from "../../../reducers/userReducer";
import { getIsLoggedIn } from "../../../reducers/userReducer";
import {
  LogInComponent,
  ReduxDispatchProps,
  ReduxStateProps
} from "./component";

interface MyActionType {
  type: "LOGIN";
  payload: string;
}

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    api: getApiUrl(state),
    accessToken: getAccessToken(state),
    isLoggedIn: getIsLoggedIn(state),
    loginFailed: getLoginFailed(state),
    failedMessage: getFailedMessaged(state),
    current_user: getUserName(state)
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<MyActionType>
): ReduxDispatchProps {
  return {
    loginRequest: bindActionCreators(loginRequest, dispatch)
  };
}

export const LogIn = connect<ReduxStateProps, ReduxDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(LogInComponent);
