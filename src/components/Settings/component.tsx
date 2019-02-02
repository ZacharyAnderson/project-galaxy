import classnames from "classnames";
import * as React from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Jumbotron,
  Media,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { NavBar } from "../NavBar/container";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  current_user: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

interface State {
  userObject?: object;
  activeTab: string;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
  }

  public toggle = (tab: string) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  public render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <NavBar />
        <Nav tabs={true}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Account
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Jumbotron>
              <Container>
                <Media>
                  <Media left={true} href="#">
                    <img src={this.props.avatar} />
                  </Media>
                  <Media body={true}>
                    <Media heading={true}>User Settings</Media>
                    User: {this.props.current_user} <br />
                    Email: {this.props.email} <br />
                  </Media>
                </Media>
              </Container>
            </Jumbotron>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
