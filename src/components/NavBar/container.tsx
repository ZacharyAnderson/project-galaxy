import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { removeLoginToken } from "../../actions/actions";
import { GlobalState } from "../../reducers/initialStateInterface";
import { getIsLoggedIn } from "../../reducers/userReducer";
import {
  NavBarComponent,
  ReduxDispatchProps,
  ReduxStateProps
} from "./component";

interface MyActionType {
  type: "LOGOUT";
  payload: {};
}

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    isLoggedIn: getIsLoggedIn(state)
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<MyActionType>
): ReduxDispatchProps {
  return {
    removeLoginToken: bindActionCreators(removeLoginToken, dispatch)
  };
}

export const NavBar = connect<ReduxStateProps, ReduxDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
