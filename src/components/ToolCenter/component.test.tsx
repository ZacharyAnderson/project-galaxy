import { shallow } from "enzyme";
import * as React from "react";
import "../../../setupTests";
import { ToolCenter } from "./component";

describe("<ToolCenter />", () => {
  it("renders the component", () => {
    const component = shallow(<ToolCenter />);
    expect(component).toMatchSnapshot();
  });
});
