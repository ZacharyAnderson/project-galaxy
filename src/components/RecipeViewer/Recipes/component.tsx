import * as React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";

const testList = [{ name: "Oatmeal Stouter", tag: "/zachand/recipe" }, { name: "Pale elr", tag: "/zachand/recipe" },
{ name: "Goser", tag: "/zachand/recipe" }, { name: "tester", tag: "/zachand/recipe" }]

export class Recipes extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      testList.map(aleName => {
        // tslint:disable-next-line: jsx-key
        return <ListGroupItem tag={Link} to={aleName.tag}>{aleName.name}</ListGroupItem>
      })
    );
  }
}
