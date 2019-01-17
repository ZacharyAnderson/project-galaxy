import * as React from "react";
import { Card, Media } from "reactstrap";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  current_user: string;
  email: string;
  avatar: string;
}

interface State {
  userObject: object;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    fetch(this.props.api + "user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.props.accessToken
      }
    })
      .then(response => response.json)
      .then(data => console.log(data));
  }

  public render() {
    return (
      <div>
        <Card>
          <Media>
            <Media left={true} href="#">
              <img src="https://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?d=identicon&s=80" />
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
