import * as React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Recipes } from "./Recipes/component";

export class RecipeViewer extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <ListGroup>
        <ListGroupItem>Oatmeal Stout</ListGroupItem>
        <ListGroupItem>Pale Ale</ListGroupItem>
        <ListGroupItem>India Pale Ale</ListGroupItem>
        <Recipes />
      </ListGroup>
    );
  }
}
