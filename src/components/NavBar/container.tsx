import { connect } from 'react-redux';
import { GlobalState } from "../../reducers/initialStateInterface";
import { getisLoggedIn } from "../../reducers/userReducer";
import { NavBarComponent, ReduxStateProps } from "./component";

function mapStateToProps(state: GlobalState): ReduxStateProps {
    return {
        isLoggedIn: getisLoggedIn(state)
    };
}

export const NavBar = connect<ReduxStateProps>(mapStateToProps)(NavBarComponent)