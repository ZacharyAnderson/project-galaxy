import { connect } from "react-redux";
import { getApiUrl } from "../../reducers/apiReducer";
import { GlobalState } from "../../reducers/initialStateInterface";
import { getAccessToken } from "../../reducers/userReducer";
import { ReduxStateProps, SettingsComponent } from "./component";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    api: getApiUrl(state),
    accessToken: getAccessToken(state)
  };
}

export const Settings = connect<ReduxStateProps>(mapStateToProps)(
  SettingsComponent
);
