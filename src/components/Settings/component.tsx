import * as React from "react";
import { Redirect } from "react-router-dom";
import { Card, Media } from "reactstrap";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  current_user: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

interface State {
  userObject: object;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Card>
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
        </Card>
      </div>
    );
  }
}
