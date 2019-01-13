import { connect } from "react-redux";
import { getApiUrl } from "../../reducers/apiReducer";
import { GlobalState } from "../../reducers/initialStateInterface";
import { ReduxStateProps, SignUpComponent } from "./component";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    api: getApiUrl(state)
  };
}

export const SignUp = connect<ReduxStateProps>(mapStateToProps)(
  SignUpComponent
);
