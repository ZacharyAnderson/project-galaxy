import * as React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";

export class Recipes extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <ListGroupItem tag={Link} to="/zachand/recipe">
        test
      </ListGroupItem>
    );
  }
}
