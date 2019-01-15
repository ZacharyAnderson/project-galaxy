import * as React from "react";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
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
    return (
      <div>
        <h1>TEMPLATE FOR NOW</h1>
        <h3>USER:</h3>
        <h3>EMAIL:</h3>
      </div>
    );
  }
}
