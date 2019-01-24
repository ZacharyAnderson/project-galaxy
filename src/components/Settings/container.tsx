import { connect } from "react-redux";
import { getApiUrl } from "../../reducers/apiReducer";
import { GlobalState } from "../../reducers/initialStateInterface";
import {
  getAccessToken,
  getAvatar,
  getIsLoggedIn,
  getUserEmail,
  getUserName
} from "../../reducers/userReducer";
import { ReduxStateProps, SettingsComponent } from "./component";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    api: getApiUrl(state),
    accessToken: getAccessToken(state),
    current_user: getUserName(state),
    email: getUserEmail(state),
    avatar: getAvatar(state),
    isLoggedIn: getIsLoggedIn(state)
  };
}

export const Settings = connect<ReduxStateProps>(mapStateToProps)(
  SettingsComponent
);
