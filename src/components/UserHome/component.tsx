import * as React from "react";
import { Card } from "reactstrap";
import { NavBar } from "../NavBar/container";
import { RecipeViewer } from "../RecipeViewer/component";

export class UserHome extends React.Component<{}> {
  public render() {
    return (
      <div>
        <NavBar />
        <Card>
          <RecipeViewer />
        </Card>
      </div>
    );
  }
}
