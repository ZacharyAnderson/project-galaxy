import * as React from "react";

export class GenericNotFound extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>Path Not Found</h1>
      </div>
    );
  }
}
