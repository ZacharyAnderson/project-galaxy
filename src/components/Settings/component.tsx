import * as React from "react";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  current_user: string;
  email: string;
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
        <h1>TEMPLATE FOR NOW</h1>
        <h3>USER: {this.props.current_user}</h3>
        <h3>EMAIL: {this.props.email}</h3>
      </div>
    );
  }
}
