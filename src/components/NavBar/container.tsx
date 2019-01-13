import { connect } from 'react-redux';
import { GlobalState } from "../../reducers/initialStateInterface";
import { getIsLoggedIn } from "../../reducers/userReducer";
import { NavBarComponent, ReduxStateProps } from "./component";

function mapStateToProps(state: GlobalState): ReduxStateProps {
    return {
        isLoggedIn: getIsLoggedIn(state)
    };
}

export const NavBar = connect<ReduxStateProps>(mapStateToProps)(NavBarComponent)