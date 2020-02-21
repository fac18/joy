import React from "react";
import { render } from "@testing-library/react";
import ButtonAppBar from "./NavBar";

test("renders the home navbar component", () => {
  render(<ButtonAppBar />);
});
