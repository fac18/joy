import React from "react";
import { render } from "@testing-library/react";
import ButtonAppBar from "./NavBar";
import TemporaryDrawer from './NavMenu';

test("renders the home navbar component", () => {
  render(<ButtonAppBar />);
});

test("renders the temporary drawer component", () => {
  render(<TemporaryDrawer />)
})
